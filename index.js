import express from 'express';
import cors from "cors";
import router from './routes/userRoute.js';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import ConnectMongo from './databaseCannection/connectMongoDb.js';
import mediaRoute from './routes/mediaRouter.js';
ConnectMongo();
dotenv.config();
const app= express();
app.use(cookieParser());
app.use(cors({
    origin:"https://hub-xf.vercel.app/",
    credentials:true
}));
app.use(express.json());
app.use("/api",router);
app.use("/api",mediaRoute);

app.use("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"working fine"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("Backend ready at port number 4000");
})  