import express from "express";
const app = express();
import cors from "cors";
import courseRoute from "./routes/courseRoute.js";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 8000 || process.env.PORT


// middleware
app.use(cors());
app.use(express.json());
app.use(courseRoute);
app.use(userRoute);

app.listen(PORT, () => {
    console.log(`Aplikasi sedang berjalan di port:${PORT}`);
});