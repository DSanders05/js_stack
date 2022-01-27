const ProductController = require("../controller/product.manager.controller")


//exporting these functions and expecting app(server) to call them
module.exports = (app)=>{
    app.post("/api/create", ProductController.createProduct)
    
    app.get("/api/allProducts", ProductController.findAllProducts)

    app.get("/api/:id", ProductController.findOneProduct)

    app.put("/api/product/:id", ProductController.updateProduct)

    app.delete("/api/product/:id", ProductController.deleteProduct)
}