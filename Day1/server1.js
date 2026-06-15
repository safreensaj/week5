const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain','Access-Control-Allow-Origin':'*'})
    res.end('Hello everyone...');
});
server.listen(3000,()=>console.log('server running http://localhost:3000'));
