//import the controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")


//these are your backend routes ---AKA api endpoints
module.exports = (app)=>{
    app.get("/api/hello", NinjaController.sayHello);

    app.get("/api/allninjas", NinjaController.findAllNinjas);

    app.post("/api/create", NinjaController.createNewNinja);

    app.get("/api/ninjas/random", NinjaController.findRandomNinja);

    app.get("/api/ninjas/:id", NinjaController.findOneNinja);

    app.put("/api/ninjas/:id", NinjaController.updateNinja);

    app.delete("/api/ninjas/:id", NinjaController.deleteNinja);
}