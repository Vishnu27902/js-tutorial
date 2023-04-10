const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.status(200).send(`<h1>Home Page</h1>`)
})

app.get("/:param",(req,res)=>{
    console.log(req.params)
    // res.writeHead(200,{"content-type":"aplication/json"})
    res.json({id:1,name:"Vishnu"})
    console.log(req.query)
})

app.listen(8000)