import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get('/users', getUsers);
userRoute.get('/users/:id', getUserById);
userRoute.post('/users', createUser);
userRoute.patch('/users/:id', updateUserById);
userRoute.delete('/users/:id', deleteUserById);

export default userRoute;