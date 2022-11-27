const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComerciantesSchema = new Schema({

    nombres:{type: String, require: true, max: 60},
    apellidos:{type: String, require: true, max: 60},
    cedula:{type: String, require: true, max: 100},
    telefono:{type: String, require: false, max: 15},
    correo:{type: String, require: true, max: 70},
    direccion:{type: String, require: false, max: 150},
    pais:{type: String, require: true, max: 40},
    departamento:{type: String, require: true, max: 60},
    ciudad:{type: String, require: true, max: 60}

}); 

module.exports = mongoose.model("comerciantes", ComerciantesSchema);

