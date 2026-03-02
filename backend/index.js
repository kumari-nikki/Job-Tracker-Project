
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
dotenv.config({})
//middleware
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    "origin":"http://localhost:5173",
    "credentials":true
}))
// mongoose cnnection
const PORT=process.env.PORT||3000;
//api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.listen(PORT,()=>{
    connectDB();
    console.log("server is running at port 3000")
})


