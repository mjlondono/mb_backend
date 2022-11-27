const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({

    id_producto:{type: String, require: false, max: 10},
    nombre:{type: String, require: true, max: 60},
    descripcion:{type: String, require: true, max: 200},
    marca:{type: String, require: false, max: 20},
    valor:{type: Number, require: true, max: 1000000000}

}); 

module.exports = mongoose.model("productos", ProductosSchema);