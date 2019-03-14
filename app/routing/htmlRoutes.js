module.exports = function(app, path) {

    //HTML Routing
    app.get("/", (req,res)=>{
        return res.sendFile(path.join(__dirname, "../../app/public/home.html"));
    })

    app.get("/survey", (req, res)=>{
        return res.sendFile(path.join(__dirname, "../../app/public/survey.html"))
    })
    
}