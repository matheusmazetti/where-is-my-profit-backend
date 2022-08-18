import { findRecipeByNameAndUserId, insertRecipe } from "../repositories/recipeRepository";
import { authServices } from "../services/authServices";
import { recipeServices } from "../services/recipeServices";



export async function insertNewRecipe(req, res){
    let body = req.body;
    let token = req.headers.authorization;
    let userId = authServices.verifyToken(token);
    let ingToken = recipeServices.createIngredientsToken(body.ingredients);
    const newData = {
        recipeName: body.recipeName,
        userId: userId,
        ingredients: ingToken
    }
    await insertRecipe(newData);
    res.sendStatus(201);
}
export async function checkName(req, res){
    let body = req.body;
    let token = req.headers.authorization
    let userId = authServices.verifyToken(token);
    let result = await findRecipeByNameAndUserId(body.name, userId);
    if(result){
        res.sendStatus(409);
    }
    res.sendStatus(200);
}
    