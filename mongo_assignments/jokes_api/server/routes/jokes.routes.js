const JokesController = require("../controllers/jokes.controllers")

module.exports = (app)=>{
    app.post("/api/jokes/new", JokesController.createJoke)

    app.get("/api/jokes", JokesController.findJokes)

    app.get("/api/jokes/:id", JokesController.findOneJoke )

    app.put("/api/update/:id", JokesController.updateJoke)

    app.delete("/api/delete/:id", JokesController.deleteJoke) 
}

