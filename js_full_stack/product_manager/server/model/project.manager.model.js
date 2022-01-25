const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is a required field!"],
        minlength: [4, "Product Title must be at least 4 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is a required field."],
        // min: [3, "Price field must include a dollar ammount along with change."]
    },
    description: {
        type: String,
        required: [true, "Description is required for all new products."],
        minlength: [5, "Description field must be at least 5 characters long."]
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;