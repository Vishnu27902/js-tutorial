const eventListener = require("events")

const el = new eventListener()

el.on("request",()=> console.log("Event Occured"))

el.on("request",(name)=> console.log(`Event ${name} has occured`))

el.emit("request","Click")
