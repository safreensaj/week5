const express=require('express');
const app=express();
app.use(express.json());
const studentRoutes=require('./router/studentRoutes');
app.use('/students',studentRoutes);
app.listen(3000,()=>{
    console.log("server running at http://localhost:3000");
})
