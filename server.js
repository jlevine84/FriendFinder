const express = require("express")
const path = require("path")

const server = express();

//use env variable for port
const PORT = 8080;

server.use(express.urlencoded({ extended: true}));
server.use(express.json());

server.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})


server.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})