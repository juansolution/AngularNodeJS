const mongoose = require("mongoose");


var Schema =  mongoose.Schema;

const usuarios = Schema({
    nombre: { type: String, require: true },
    apellido: {type: String, require: true},
    tipo: {type: String, require: true},
    identificacion: {type: Number, require: true}
});

module.exports = mongoose.model('user', usuarios);


