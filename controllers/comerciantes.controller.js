const Comerciante = require("../models/comerciantes.model");

let response = {

    msg: "",
    exito: false

}

exports.create = function(req,res){

    let comerciante = new Comerciante({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        pais: req.body.pais,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad

    })

    comerciante.save(function(err){

        if(err){

            console.error(err);
            response.exito = false,
            response.msg = "ERROR al GUARDAR el USUARIO"
            res.json(response)
            return;
        }

        response.exito = true;
        response.msg = "El USUARIO se GUARDO CORRECTAMENTE"
        res.json(response)
        
    })
}

exports.find = function(req, res){

    Comerciante.find(function(err, comerciantes){

        res.json(comerciantes);

    })
}

exports.findOne = function(req, res){

    Comerciante.findOne({_id: req.params.id},function(err, comerciante){

        res.json(comerciante);

    })
}

exports.update = function(req, res){

    let comerciante = ({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        pais: req.body.pais,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad

    })

    Comerciante.findByIdAndUpdate(req.params.id,{$set: comerciante}, function(err){

        if(err){

            console.error(err),
            response.exito = false,
            response.msg = "ERROR al MODIFICAR el USUARIO"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El USUARIO se ACTUALIZO CORRECTAMENTE"
        res.json(response)
    })
}

exports.remove = function(req, res){

    Comerciante.findByIdAndRemove({_id: req.params.id}, function(err){

        if(err){

            console.error(err),
            response.exito = false,
            response.msg = "ERROR al ELIMINAR el USUARIO"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El USUARIO se ELIMINO CORRECTAMENTE"
        res.json(response)
    })
}