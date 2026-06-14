const express=require("express");
const app=express();
app.use((req,res,next)=>{
    console.log("middleware running");
    next();
})
const userRoutes=require("./routes/userRoutes");
app.use("/students",userRoutes)
app.get("/",(req,res)=>{
    res.send("Home page");
})
app.get("/about",(req,res)=>{
    res.send("About page");
})
app.get("/user/:name",(req,res)=>{
    res.send(`Hello ${req.params.name}`);
})
app.get("/search",(req,res)=>{
    res.send(`Searching for ${req.query.course}`);
})
app.set("view engine","ejs");
app.get("/profile",(req,res)=>{
    res.render("profile",{
        age:22
    })
})
app.listen(3001,()=>{
    console.log("Server running at http://localhost:3000")
})