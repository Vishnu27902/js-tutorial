const express = require("express")

const path = require("path")

const app = express()

app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,"./html_file/express.html"))
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>404, Page Not Found</h1>")
})

app.listen(8000)