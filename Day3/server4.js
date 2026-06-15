const express=require('express')
const app=express()
const userroutes=require('./routes/studentroutes')
app.use('/students',userroutes)


app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})