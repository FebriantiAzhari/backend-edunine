import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all users
export const getUsers = async (req, res) => {
    try {
        const response = await prisma.user.findMany();
        res.status(200).json({
            message: "Successfully fetch all users",
            data: response
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


// GET user By Id
export const getUserById = async (req, res) => {
        try {
            const response = await prisma.user.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            res.status(200).json({
                message: "Successfully get user",
                data: response
            });
        } catch (error) {
            res.status(404).json({message: error.message});
        }
}


// POST or create a new user
export const createUser = async (req, res) =>{
    const {username, email, password, nama, role} = req.body;
    try {
        const user = await prisma.user.create({
            data:{
                username: username,
                email: email,
                password: password,
                nama: nama,
                role: role
            }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

// PATCH or update user by ID
export const updateUserById = async(req, res) => {
    const {username, email, password, nama, role} = req.body;
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },

            data:{
                username: username,
                email: email,
                password: password,
                nama: nama,
                role: role
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}


// DELETE user 
export const deleteUserById = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}