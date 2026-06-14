const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("welcome to homepage");
    }else if(url==='/about'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("This is about page");
    }else if(url==='/contact'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("This is contact page");
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        return res.end("error loading");
    }
});
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});