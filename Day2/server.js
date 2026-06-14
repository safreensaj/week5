const express=require('express')
const app=express()
app.get('/',(req,res)=>{
res.send('Hii,welcome...')
})
app.post('/',(req,res)=>{
    res.send('Hello,everyone.....')
})
app.listen(3000,()=>console.log("Server is running at http://localhost:3000"))