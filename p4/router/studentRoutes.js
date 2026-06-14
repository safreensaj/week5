const express=require("express");
const router=express.Router();
let students=[];
router.get('/',(req,res)=>{
    res.json(students)
})
router.get('/:id',(req,res)=>{
const student=students.find(s=>s.id===parseInt(req.params.id));
if(!student){
    return res.status(404).send("user not found");
}
res.json(student)
})
router.post('/',(req,res)=>{
    const newUser={
        id:Date.now(),
        ...req.body
    };
    students.push(newUser);
    res.json(newUser)
})
router.put('/:id',(req,res)=>{
    const index=students.findIndex(s=>s.id===parseInt(req.params.id));
    if(index===-1){
        return res.status(404).send("user not found");
    }
    students[index]={...students[index],...req.body};
    res.json(students[index])
})
router.delete('/:id',(req,res)=>{
    students=students.filter(s=>s.id!==parseInt(req.params.id))
    res.send("user deleted");
})
module.exports=router;