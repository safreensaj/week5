const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
res.writeHead(200,{"content-type":"text/plain","access-control-allow-origin":"*"});
res.end("home page")
    }
})
server.listen(3000,()=>{
    console.log("server running at http://localhost:3000")
})