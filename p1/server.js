const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        fs.readFile("index.html","utf-8",(error,data)=>{
            if(error){
                res.writeHead(500,{"content-type":"text/plain"});
                return res.end("error loading")
            }
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data);
        })
    }
    else if(url==='/message'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Welcome!!!")
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        return res.end("page not found");
    }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});