const express=require('express')
const app=express()
const cors= require('cors')
PORT=3000;
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.post('/login',(req,res)=>{
console.log(req.body);
res.send(`Hello ${req.body.username},login successful`)
});
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})