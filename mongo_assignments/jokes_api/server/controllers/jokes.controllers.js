const Joke = require('../models/jokes.models')

//methods to create
//get random joke
//Update joke by _id
//Remove joke by _id

module.exports.createJoke = (req,res)=>{
    console.log(req.body);
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>res.json({message: 'Something went wrong', error:err}))
}

module.exports.findOneJoke = (req,res)=>{
    Joke.findById({_id:req.params.id})
        .then(joke=>{
            res.json({results:joke})
        })
        .catch(err=>res.json({message:'Something went wrong', error:err}))
}

module.exports.updateJoke = (req,res)=>{
    Joke.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators:true})
        .then(updatedJoke=>{
            res.json({results:updatedJoke})
        })
        .catch(err=>res.json({message:'Something went wrong', error:err}))
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.id})
        .then(deletedJoke=>{
            res.json({results:deletedJoke})
        })
        .catch(err=>res.json({message:'Something went wrong', error:err}))
}

module.exports.findJokes = (req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results:allJokes})
        })
        .catch(err=>res.json({message:'Something went wrong',error:err}))
}