import { loginSchema, newUserSchema } from "../schemas/authSchemas.js";
import { authServices } from "../services/authServices.js";


export async function newUserMiddleware(req, res, next){
    let body = req.body;
    const { error } = newUserSchema.validate(body);
    if(error){
        throw {status: 422, message: "wrong object"}
    }
    await authServices.checkUserExist(body.email);
    next();
}

export async function loginMiddleware(req, res, next){
    let body = req.body;
    const { error } = loginSchema.validate(body);
    if(error){
        throw {status: 422, message: "wrong object"}
    }
    next();
}