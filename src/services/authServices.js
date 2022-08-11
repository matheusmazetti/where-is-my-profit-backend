import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getUserByEmail } from '../repositories/authRepository.js';

dotenv.config();

function createUserData(originalData){
    let hashedPassword = bcrypt.hashSync(originalData.password, 10);
    const userObj = {
        email: originalData.email,
        name: originalData.name,
        password: hashedPassword
    }
    return userObj
}

async function checkUserExist(email){
    let verify = await getUserByEmail(email);
    if(verify){
        throw {status: 409, message: "email already registered"}
    }
    return false;
}

function generateToken(userId){
    let token = jwt.sign({userId: userId}, process.env.JWT_SECRET);
    return token;
}

function verifyToken(token){
    let user = jwt.verify(token, process.env.JWT_SECRET);
    if(!user){
        throw {status: 401, message: "invalid token"}
    }
    return user.userId;
}

async function checkUserCredentials(userData){
    let user = await getUserByEmail(userData.email);
    if(!user || !bcrypt.compareSync(userData.password, user.password)){
        throw {status: 401, message: "user or passowrd incorrect"}
    }
    return user;
}

export const authServices = {
    checkUserCredentials,
    checkUserExist,
    verifyToken,
    generateToken,
    createUserData
}

