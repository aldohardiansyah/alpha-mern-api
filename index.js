const express = require("express")

const app = express()

app.use(() => {
    console.log("hello Server")
    console.log("hello Server 1")
    console.log("hello Server 2")
})

app.listen(4000)
