const express = require("express")
// or
// const app = require("express")()
const app = express();

const logger = require("./logger")
const authorize =  require("./authorize")
app.use([authorize,logger])

app.get("/",(req,res)=>{
    console.log("Navigated to Home Page")
    // res.send("<h1>Home Page</h1>")
    res.end("<h1>Home Page</h1>")
})

app.get("/about",(req,res)=>{
    console.log("Navigated to About Page")
    res.send("<h1>About Page</h1>")
})

app.get("/about/product",(req,res)=>{
    console.log("Navigated to Products Page")
    res.send("<h1>Products Page inside of About Page</h1>")
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>404 Page Not Found Exception</h1>")
})

app.listen(8000)