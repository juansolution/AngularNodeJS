const mongoose = require("mongoose");
const {Shema} = mongoose;

const usuarios = new Shema({
    nombre: { type: String, require: true },
    apellido: {type: String, require: true},
    tipo: {type: String, require: true},
    identificacion: {type: Int32Array, require: true}
});

module.exports = mongoose.model('user', usuarios);


