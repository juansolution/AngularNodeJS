const mongoose = require("mongoose");
const server = "127.0.0.1:27017";
const database = "mean-crud";
const uri = 'mongodb://' + server + '/' + database;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true}).then(db => console.log("Base de datos mongo conectada")).catch(err => console.error(err));

module.exports = {
    mongoose
}

