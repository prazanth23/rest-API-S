const express=require("express")
const mongoose=require("mongoose")
const productRouter=require("./route/routes")
const todoRouter=require("./route/todo.route")
const cityRouter=require("./route/routes1")
const collegeRouter=require("./route/college.route")
const hotelRouter=require("./route/hotel.routes")

const cors = require('cors')

const app=express()
app.use(express.json())


const corsOptions={
    origin:"http://localhost:4200",
    optionSuccessStatus:200
} 
app.use(cors(corsOptions))

app.use("/school",todoRouter)
app.use("/school",productRouter)
app.use("/school",cityRouter)
app.use("/school",collegeRouter)
app.use("/school",hotelRouter)



app.listen(3000,()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/school").then(()=>{
        console.log("connected to db successfully in port 3000");
    }).catch(err=>{
        console.log("failed to connect",err.message);
    })
})