module.exports = function(app, express, gamers) {
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

    app.get("/api/list", (req, res)=> {
        return res.json(gamers);
    })

    app.post("/api/list", (req, res)=> {
        const character = req.body;
        console.log(character);
        var bestFit;

        let totalArray = []
        
        gamers.forEach(element => {
            let total = 0;
            total += Math.abs(parseInt(character.q1) - parseInt(element.q1))
            total += Math.abs(parseInt(character.q2) - parseInt(element.q2))
            total += Math.abs(parseInt(character.q3) - parseInt(element.q3))
            total += Math.abs(parseInt(character.q4) - parseInt(element.q4))
            total += Math.abs(parseInt(character.q5) - parseInt(element.q5))
            total += Math.abs(parseInt(character.q6) - parseInt(element.q6))
            total += Math.abs(parseInt(character.q7) - parseInt(element.q7))
            total += Math.abs(parseInt(character.q8) - parseInt(element.q8))
            total += Math.abs(parseInt(character.q9) - parseInt(element.q9))
            total += Math.abs(parseInt(character.q10) - parseInt(element.q10))
            totalArray.push(total)
        });

        for (i = 0; i < totalArray.length; i++) {
            for (n = 1; n < totalArray.length; n++) {
                if(totalArray[i] > totalArray[n])   bestFit = i
            }
        }

        res.json(gamers[bestFit]);
        gamers.push(character);
    })
}
