//Create an Express server with routes /, /about, /contact.

// const express=require('express');
// const app=express()
// app.get('/',(req,res)=>{
// res.send("This is home page")
// })
// app.get('/about',(req,res)=>{
// res.send("This is about page")
// })
// app.get('/contact',(req,res)=>{
// res.send("This is contact page")
// })
// app.use((req, res) => {
//     res.status(404).send("Page Not Found");
// })
// app.listen(3000,()=>{
//     console.log("Server1 is running at http://localhost:3000")
// })

//Create a route /users/:id and return the user id.
// const express=require('express')
// const app=express()
// app.get('/users/:id',(req,res)=>{
//     res.send("User ID: " + req.params.id);
// })
// app.listen(3000,()=>{
//     console.log("server running at http://localhost:3000")
// })

//Create a route /products/:productId and return product id.
// const express=require('express')
// const app=express()
// app.get('/products/:productId',(req,res)=>{
// res.send("Product Id: "+req.params.productId)
// })
// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000")
// })

//Create a search route:/search?name=apple Return:You searched apple
// const express=require('express')
// const app=express()
// app.get('/search',(req,res)=>{
//     res.send("You searched : "+req.query.name)
// })
// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000")
// })

//Create routes using different HTTP methods:
// GET /users
//POST /users
//PUT /users/:id
//DELETE /users/:id
// const express=require('express')
// const app=express()
// app.use(express.json())
// app.get('/users',(req,res)=>{
// res.send('Get all users')
// })
// app.post('/users',(req,res)=>{
// res.send('User Created')
// })
// app.put('/users/:id',(req,res)=>{
// res.send('User updated with id: ' +req.params.id)
// })
// app.delete('/users/:id',(req,res)=>{
// res.send('User deleted with id: '+req.params.id)
// })
// app.listen(3000,()=>{
//     console.log('Server running at http://localhost:3000')
// })

//Create a 404 route for unmatched URLs.
// const express=require('express')
// const app=express()
// app.use((req, res) => {
//  res.status(404).send("Page Not Found");
// })
// app.listen(3000,()=>{
//   console.log("Server1 is running at http://localhost:3000")
//  })


 //Explain why route order matters in Express.
 //Dynamic routes like :id can match many values, so they should be placed after specific routes like /new to avoid incorrect matching.
 /*app.get('/users/new', (req, res) => {
    res.send("New user page");
});

app.get('/users/:id', (req, res) => {
    res.send("Dynamic route");
});
*/


//Create this route:
// /category/:categoryName/product/:productId
//Example:
// /category/mobile/product/12
//Return category and product id.
// const express=require('express')
// const app=express()
// app.get('/category/:categoryName/product/:productId',(req,res)=>{
//     const category=req.params.categoryName;
//     const id=req.params.productId;
//     res.send('Category: ' +category+ ' ,Product: ' +id)
// })
// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000")
// })


//Create a route that sends JSON:
//res.json({ message: "Success" });
// const express=require ('express')
// const app=express()
// app.get('/api',(req,res)=>{
//     res.json({ Message:"Success" })
// })
// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000")
// })


//Create a mini Express app for students:
//GET /students
//GET /students/:id
//POST /students
//DELETE /students/:id
const express=require('express')
const app=express()
app.use(express.json())
let students=[
    {id:1,name:"Rahul"},
    {id:2,name:"Anu"}
]
app.get('/students',(req,res)=>{
res.json(students)
})
app.get('/users/:id',(req,res)=>{
    const studentId=parseInt(req.params.id);
    const student=students.find(s=>s.id===id);
    if(!student){
        return res.status(404).json({message:"student not found"})
    }
})
app.post('/students',(req,res)=>{
    const newStudent={
        id:students.length+1,
        name:req.body.name
    };
    students.push(studentName)
    res.json({Message:"student added",student:newStudent})
})
app.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    students=students.filter(s=>s.id!==id);
    res.json({ message: "Student deleted" });
})
app.listen(3000,()=>{
    console.log("server running at http://localhost:3000")
})