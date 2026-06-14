const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send("login success")
})
app.listen(3000,()=>{
    console.log("server running at http://localhost:3000")
})