const authorize = (req,res,next) =>{
    console.log(req.query)
    const {username} = req.query;
    if(username==="Vishnu"){
        req.username = {name:"Vishnu",id : 3}
        console.log("Successfully Logged in")
        next()
    }
    else{
        console.log("Unsuccessful login")
        res.status(401).send("<h1>Unauthorized login</h1>")
        next()
    }
}

module.exports = authorize