import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function createIngredientsToken(ingObj){
    let result = jwt.sign(ingObj, process.env.JWT_SECRET);
    return result;
}

export const recipeServices = {
    createIngredientsToken
}