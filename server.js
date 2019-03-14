const express = require("express")
const path = require("path")
const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes")
const gamers = require("./app/data/gamers")
const app = express();


const PORT = process.env.PORT || 8080;

htmlRoutes(app, path)
apiRoutes(app, express, gamers)
//API Routing

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})