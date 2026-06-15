const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    console.log('middleware running')
    next()
})
    
app.get('/',(req,res)=>{
    res.send('Hellooo')
})
app.post('/login',(req,res)=>{
    console.log('Data received',req.body)
    res.send('From login')
})
app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
})