const { isUtf8 } = require('buffer');
const express=require('express');
const fs=require('fs');
const app=express();
const PORT=3000;
const fileName = 'studentData.txt';

app.get('/write',(req,res)=>{
    fs.writeFile(fileName,'Name: Anu\nMarks: 95',(err)=>{
        if(err){
            return res.status(500).send('Error writing file')
        }
        res.send('File written successfully')
    })
})
app.get('/read',(req,res)=>{
    fs.readFile(fileName,'utf-8',(err,data)=>{
        if(err){
            return res.status(404).send('File not found');
        }
        res.send(`<pre>${data}</pre>`)
    })
})
app.get('/append',(req,res)=>{
    fs.appendFile(fileName,'\nGrade: A',(err)=>{
        if(err){
            return res.status(500).send('Failed to append data')
        }
        res.send('Data appended successfully');
    })
})
app.get('/exists',(req,res)=>{
    const exists=fs.existsSync(fileName)
    res.send(exists?'file exists':'File does not exist');
})
app.get('/delete',(req,res)=>{
    fs.unlink(fileName,(err)=>{
        if (err) {
  return res.status(500).send('Error deleting file');
}
res.send('Deleted successfully')
    })
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});