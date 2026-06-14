const express=require("express");
const app=express();
const studentRouter=require("./routes/studentRoutes")
app.use((req,res,next)=>{
    console.log("Middleware running")
    next();
})
app.use("/students",studentRouter);
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    const students=[
        "thasleen","riya","dheenar"
    ]
    res.render("students",{
        students:students
    })
})
app.post("/students",(req,res)=>{
    res.send("Name submitted");
})
app.listen(3001,()=>{
    console.log("Server running at http://localhost:3001")
})