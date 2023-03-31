// To setup web server
const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Home Page");
    }
    else if(req.url=="/about"){
        res.end("About Page")
    }
    else{
        res.end(`<h1>Oops</h1><p>Page Not Found</p>`)
    }
})

server.listen(5000)