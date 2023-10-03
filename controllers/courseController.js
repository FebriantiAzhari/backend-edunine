import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// GET all courses
export const getCourses = async (req, res) => {
    try {
        const response = await prisma.course.findMany();
        res.status(200).json({
            message: "Successfully fetch all courses",
            data: response
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


// GET course By Id
export const getCourseById = async (req, res) => {
        try {
            const response = await prisma.course.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            res.status(200).json({
                message: "Successfully get course",
                data: response
            });
        } catch (error) {
            res.status(404).json({message: error.message});
        }
}


// POST or create a new Course
export const createCourse = async (req, res) =>{
    const {title, image, content, startDate, endDate} = req.body;
    try {
        const course = await prisma.course.create({
            data:{
                title: title,
                image: image,
                content: content,
                startDate: startDate,
                endDate: endDate
            }
        });
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

// PATCH or update course by ID
export const updateCourse = async(req, res) => {
    const {title, image, content, startDate, endDate} = req.body;
    try {
        const course = await prisma.course.update({
            where: {
                id: Number(req.params.id)
            },

            data:{
                title: title,
                image: image,
                content: content,
                startDate: startDate,
                endDate: endDate
            }
        });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}


// DELETE course 
export const deleteCourse = async (req, res) => {
    try {
        const course = await prisma.course.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
