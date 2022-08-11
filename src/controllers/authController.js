import { insertUser } from "../repositories/authRepository.js";
import { authServices } from "../services/authServices.js";


export async function insertNewUser(req, res){
    let newUser = req.body; 
    let newData = authServices.createUserData(newUser);
    await insertUser(newData);
    res.sendStatus(201);
}

export async function login(req, res){
    let userData = req.body;
    let user = await authServices.checkUserCredentials(userData);
    let token = authServices.generateToken(user.id);
    res.status(200).send(token);
}