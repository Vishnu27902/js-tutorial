const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1>`)
})

app.get("/about",(req,res)=>{
    res.send(`<h1>About Page</h1>`)
})

app.all("*",(req,res)=>{
    res.status(404).send(`<h1>404, Page not found</h1>`)
})
app.listen(5000)