const mongoose = require('mongoose');

//the new mongoose.Schema({}) just allows us to write the instructions for what each ninja should have
// The ID field is auto-generated so we don't need to include it here
const NinjaSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is a required field!"],
        minlength:[2, "First name must be at least 2 characters long!"]
    },
    lastName: {
        type: String,
        required: [true, "First name is a required field!"],
    },
    numBelts: {
        type: Number,
        required: [true, "Number of belts is a required field!"],
        min: [0, "Number of belts must be at least 0"]
    },
    isVeteran: { //isVeteran is not a required field so it won't have validations
        type: Boolean
    }
    
})

//Here we are creating a variable "Ninja" which is going to represent the name of our table (collection).
const Ninja = mongoose.model('Ninja', NinjaSchema)
//mongoose is creating a table called "ninja" using the instruction from "NinjaSchema"

module.exports = Ninja;