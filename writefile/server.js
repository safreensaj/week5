const express=require("express");
const app=express();
const fs=require('fs');
const PORT=3000;
let fileName="employee.txt";
app.get('/save',(req,res)=>{
    fs.writeFile(fileName,
        "Employee: Safrin\nDepartment: IT\nSalary: 25000",(error)=>{
if(error){
       return res.status(500).send("Error saving file");
}
 res.send("Employee data saved successfully");
})
})
app.get('/employee',(req,res)=>{
    fs.readFile(fileName,"utf-8",(error,data)=>{
        if(error){
            res.send("Employee file not found")
        }
        res.send(data)
    })
})
app.get('/update',(req,res)=>{
    fs.appendFile(fileName,"Experence:2 years",(error)=>{
        if(error){
            return res.status(500).send("Failed to update");
        }
        res.send("Employee data updated")
    })
})
app.get('/check', (req, res) => {

    const fileExists = fs.existsSync(fileName);

    if (fileExists) {
        res.send("Employee file exists");
    } else {
        res.send("Employee file not found");
    }

});
app.get('/delete', (req, res) => {

    fs.unlink(fileName, (error) => {

        if (error) {
            return res.send("File not found");
        }

        res.send("Employee file deleted");

    });

});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});