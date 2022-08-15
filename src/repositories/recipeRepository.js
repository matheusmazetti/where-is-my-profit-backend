import prisma from "../database.js";

export async function insertRecipe(recipeData){
    await prisma.recipes.create({
        data: recipeData
    });
}

export async function findRecipeById(id){
    let result = await prisma.recipes.findFirst({
        where:{
            id: id
        }
    });
    return result;
}

export async function findAllUserRecipes(userId){
    let result = await prisma.recipes.findMany({
        where: {
            userId: userId
        }
    })
    return result;
}

export async function deleteRecipeById(id){
    await prisma.recipes.delete({
        where: {
            id: id
        }
    })
}

export async function findRecipeByNameAndUserId(name, userId){
    let result = await prisma.recipes.findFirst({
        where: {
            userId: userId,
            recipeName: name
        }
    })
    return result;
}