const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({

    usuario: { type: String, require: true, max: 100 },
    contrasena: { type: String, require: true, max: 128 }

});

module.exports = mongoose.model("usuarios", UsuariosSchema);