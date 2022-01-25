//The controller needs to be able to talk to the model (the code that represents the DB)
const Ninja = require('../models/ninjas.models')

module.exports.sayHello = (req,res)=>{
    res.json({msg:"hello mongoose modularized"})
}

module.exports.findAllNinjas = (req,res) =>{
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err=>res.json({message: 'Something went wrong', error:err}))
}

module.exports.findOneNinja = (req,res) =>{
    Ninja.findOne({_id: req.params.id})
        .then(ninja=>{
            res.json({results: ninja})
        })
        .catch(err=>res.json({message: 'Something went wrong', error:err}))
}

module.exports.createNewNinja = (req,res) =>{
    console.log(req.body)
    Ninja.create(req.body)
        .then(newNinja=>{
            res.json({results: newNinja})
        })
        .catch(err=>res.json({message: 'Something went wrong', error:err}))
}

module.exports.updateNinja = (req,res) =>{
    Ninja.findOneAndUpdate({_id: req.params.id}, req.body,{new:true, runValidators:true})
        .then(updatedNinja=>{
            res.json({results: updatedNinja})
        })
        .catch(err=>res.json({message: 'Something went wrong', error:err}))
}

module.exports.deleteNinja = (req,res) =>{
    Ninja.deleteOne({_id: req.params.id})
        .then(deletedNinja=>{
            res.json({results:deletedNinja})
        })
        .catch(err=>res.json({message: 'Something went wrong', error:err}))
}