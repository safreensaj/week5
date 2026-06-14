const express=require("express");
const router=express.Router();
let products=[];
router.get('/',(req,res)=>{
    res.json(products)
});
router.get('/:id',(req,res)=>{
    const product=products.find(p=>p.id===parseInt(req.params.id));
    if(!product){
        return res.status(404).send("not found")
    }
    res.json(product)
})
router.post('/',(req,res)=>{
    const newProduct={
        id:Date.now(),
        brand:req.body.brand,
        price:req.body.price
    }
    products.push(newProduct);
    res.json(newProduct)
});
router.put('/:id',(req,res)=>{
    const index=products.findIndex(p=>p.id===parseInt(req.params.id));
    if(index===-1){
        return res.status(404).send("not found");
    }
     products[index]={...products[index],...req.body}
     res.json(products[index])
})
router.delete('/:id',(req,res)=>{
    products=products.filter(p=>p.id!==parseInt(req.params.id))
    res.send("deleted")
})
module.exports=router;