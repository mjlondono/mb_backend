const Producto = require("../models/productos.model");

let response = {

    msg: "",
    exito: false

}

exports.create = function(req,res){

    let producto = new Producto({

        id_producto: req.body.id_producto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        marca: req.body.marca,
        valor: req.body.valor

    })

    producto.save(function(err){

        if(err){

            console.error(err);
            response.exito = false,
            response.msg = "ERROR al GUARDAR el PRODUCTO"
            res.json(response)
            return;
        }

        response.exito = true;
        response.msg = "El PRODUCTO se GUARDO CORRECTAMENTE"
        res.json(response)
        
    })
}

exports.find = function(req, res){

    Producto.find(function(err, productos){

        res.json(productos);

    })
}

exports.findOne = function(req, res){

    Producto.findOne({_id: req.params.id},function(err, producto){

        res.json(producto);

    })
}

exports.update = function(req, res){

    let producto = ({

        id_producto: req.body.id_producto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        marca: req.body.marca,
        valor: req.body.valor

    })

    Producto.findByIdAndUpdate(req.params.id,{$set: producto}, function(err){

        if(err){

            console.error(err),
            response.exito = false,
            response.msg = "ERROR al MODIFICAR el PRODUCTO"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El PRODUCTO se ACTUALIZO CORRECTAMENTE"
        res.json(response)
    })
}

exports.remove = function(req, res){

    Producto.findByIdAndRemove({_id: req.params.id}, function(err){

        if(err){

            console.error(err),
            response.exito = false,
            response.msg = "ERROR al ELIMINAR el PRODUCTO"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El PRODUCTO se ELIMINO CORRECTAMENTE"
        res.json(response)
    })
}