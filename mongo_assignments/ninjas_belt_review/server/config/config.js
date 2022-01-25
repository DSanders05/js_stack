const mongoose = require('mongoose'); //import mongoose

const db_name = "ninjasdb";

mongoose.connect(`mongodb+srv://groot:groot@${db_name}.ahqsb.mongodb.net/ninjasdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));