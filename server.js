const http = require("http")
const {readFileSync} = require("fs")

const homePage = readFileSync("./html_file/index.html","utf8")

const server = http.createServer((req,res)=>{
    console.log(req.method)
    if(req.url == "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(homePage)
        res.end()
    }
    else if(req.url == "/about"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>About Page</h1>`)
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.write("<h1>404, Page not found</h1>")
        res.end()
    }
})

server.listen(8000)