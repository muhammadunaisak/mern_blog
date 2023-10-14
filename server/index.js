import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import "./data/database.js"
import UserRouter from "./routes/user.js";
import BlogRouter from "./routes/blog.js";
dotenv.config()





const port=process.env.PORT

const app=express()

app.use(express.json())
app.use(cors({credentials:true}))
app.use("/server/user",UserRouter)

app.use("/server/blog",BlogRouter)


// app.get("/",(req,res)=>{
//     res.json({msg:"this is home"})
// })

// app.get("/about",(req,res)=>{
//     res.json({msg:"this is about"})
// })

// app.post("/",(req,res)=>{
// //    console.log(req.body);
// const {name,age,email}=req.body;

//    res.json({name,age,email})
// })


app.listen(port,()=>{
    console.log("App is running on port ",port);
})
