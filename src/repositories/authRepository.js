import prisma from "../database.js";

export async function insertUser(userData){
    await prisma.users.create({
        data: userData
    })
}

export async function getUserByEmail(email){
    const result = prisma.users.findFirst({
        where: {
            email: email
        }
    });
    return result;
}

export async function getUserById(id){
    const result = prisma.users.findFirst({
        where: {
            id: id
        }
    });
    return result;
}

