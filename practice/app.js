const express=require('express');
const app=express();
app.use(express.json());
const studentrouter=require('./routes/studentRouter');
const productrouter=require('./routes/productRouter');
app.use('/students',studentrouter);
app.use('/products',productrouter)
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});