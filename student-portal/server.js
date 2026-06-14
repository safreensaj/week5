const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("form")
});
app.post("/register",(req,res)=>{
    res.render("result",{
            name:req.body.name,
            age:req.body.age
        })
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})