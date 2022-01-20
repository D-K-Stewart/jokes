const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};