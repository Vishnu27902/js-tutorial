const logger = (req,res,next) =>{
    console.log("Logged in")
    console.log(req.username)
    next()
}

module.exports = logger