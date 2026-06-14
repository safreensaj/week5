const express=require('express');
const app=express();
const path=require('path');
const PORT=3001;
app.set("view engine","ejs");
app.use('/',(req,res)=>{
    const userData={
        userName:"safreen",
        hobbies:['coding','baking','gardening']
    }
    res.render('home',userData)
})
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})