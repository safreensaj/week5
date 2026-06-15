const http = require('http');
const server = http.createServer((req, res) => {
    // get URL
    const url = req.url;
    // HOME ROUTE
    if (url === '/' && req.method=='GET') {
        res.writeHead(200, { 'content-type': 'text/plain', 'access-control-allow-origin': '*' })
        res.end('Welcome to home page')
        // ABOUT ROUTE
    }else if(url === '/' && req.method=='POST'){
         res.end('Welcome to home page hello')
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/plain', 'access-control-allow-origin': '*' })
        res.end("This is about page")
    }
    // CONTACT ROUTE
    else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is Contact Page");
    }

    // 404 ROUTE (Fallback)
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});