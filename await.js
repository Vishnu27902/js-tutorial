const axios = require("axios")

async function func() {
    const res = await axios.get("www.google.com")
    console.log(res)
    return res
}

console.log(func())

func().then((data) => {
    console.log(data)
})