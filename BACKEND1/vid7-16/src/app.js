import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();
app.use(cors({
origin: process.env.CORS_ORIGIN,
credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
    limit:"16kb"

}));
app.use(express.static("public"));



// routes

import userRouter from './routes/user.routes.js'

// routes declaration

app.use("/api/v1/users", userRouter)

// localhost:8000/api/v1/users/registers




export {app}

//app.js