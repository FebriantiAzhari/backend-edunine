import express from "express";
import {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} from "../controllers/courseController.js";

const courseRoute = express.Router();

courseRoute.get('/courses', getCourses);
courseRoute.get('/courses/:id', getCourseById);
courseRoute.post('/courses', createCourse);
courseRoute.patch('/courses/:id', updateCourse);
courseRoute.delete('/courses/:id', deleteCourse);

export default courseRoute;