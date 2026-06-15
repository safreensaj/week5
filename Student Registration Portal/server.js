const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
const students=[
    {
        name:"safreen",
        age:22,
        class:"Bca"
    },
    {
        name:"Riya",
        age:21,
        class:"Mca"
    }
];
app.get("/register",(req,res)=>{
    res.render("form");
});
app.post("/register",(req,res)=>{
    const student={
        name:req.body.name,
        age:req.body.age,
        class:req.body.class
    }
students.push(student);

res.redirect("/students");
});
app.get("/students",(req,res)=>{
    res.render("students",{students})
})
app.get("/students/:id",(req,res)=>{
const student=students[req.params.id];

if(!student){
    return res.send("Student not found");
}
res.render("student",{student})
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})

