const express=require('express')
const app=express()
app.use(express.json())
let users=[];
app.post('/users',(req,res)=>{
    const newUser={
        id:Date.now(),
        ...req.body
    };
    users.push(newUser)
    res.json(newUser)
})
app.get('/',(req,res)=>{
    res.json(users)
})
app.get('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!user){
        return res.status(404).send("User not found")
    }
    res.json(user)
})
app.put('/users/:id',(req,res)=>{
   const index=users.findIndex(u=>u.id===parseInt(req.params.id));
   if(index===-1){
    res.status(404).send("User not found")
   }
   users[index]={...users[index],...req.body}
   res.send(users[index])
})
app.delete('/users/:id',(req,res)=>{
     users=users.filter(u=>u.id!==parseInt(req.params.id));
    res.send("user deleted")
})
app.listen(3001,()=>{
    console.log("Server running at http://localhost:3001")
})