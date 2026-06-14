const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("form");
})
app.post("/register",(req,res)=>{
    res.send(`Welcome ${req.body.name}`)
})
app.listen(3001,()=>{
    console.log("Server running at http://localhost:3001")
})