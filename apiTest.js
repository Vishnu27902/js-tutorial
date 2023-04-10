const express = require('express')
const app = express()
const port = process.env.PORT || 5000


// API middleware

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static("D:/Web Development/guvi/"))
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register.html',(req,res)=>{
    console.log(req.body)
})

app.listen(port,()=>console.log(`Listening to Port http://localhost:${port}`))