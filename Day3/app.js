const express=require('express')
const app=express()


const studentroutes=require('./routes1/studentroutes')
app.use(express.json())

function logger(req, res, next) {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.use('/students',studentroutes)

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})