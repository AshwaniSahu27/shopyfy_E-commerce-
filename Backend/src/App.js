import cookieParser from "cookie-parser";
import express, { json } from "express";
import cors from "cors"

const app = express();
 
app.use(
    cors({
        origin: process.env.CORS_ORIGINE || "*",
        credential: true
    })
)

import userRouter from "./routes/user.routes.js"

app.use("/user", userRouter)


app.use(cookieParser());
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));






export default app;
