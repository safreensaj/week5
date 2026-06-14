const express=require('express');
const app=express();
const PORT=3000;
app.set('view engine','ejs')
app.get('/login',(req,res)=>{
    const user={
        userName:"admin",
        password:1234
    }
    res.render('home',{user});
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})
