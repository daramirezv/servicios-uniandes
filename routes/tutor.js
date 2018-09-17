"use strict";
//esta clase es la que muestra los servicios de express
var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const UsuarioSchema = require("../models/user");
const Usuario = mongoose.model("Usuario", UsuarioSchema);



const findDocuments = function (string, db, callback) {
  // Get the documents collection
  const collection = db.collection(string);
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    callback(docs);
  });
}

function getRecursos(string, callback) {
  // Connection URL
  const url = "mongodb://proyecto:proyecto1@ds015194.mlab.com:15194/proyecto2";

  // Database Name
  const dbName = "proyecto2";


  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    findDocuments(string, db, (data) => {
      callback(data);
      client.close();
    });

  });
}

const insertDocuments = function (req, string, db, callback) {
  // Get the documents collection
  const collection = db.collection(string);
  // Insert some documents
  const objeto = req.query;

  collection.insertMany([objeto],
    function (err, result) {
      assert.equal(err, null);
      callback(result);
    });
}

function postRecurso(req, string, callback) {
  // Connection URL
  const url = "mongodb://proyecto:proyecto1@ds015194.mlab.com:15194/proyecto2";

  // Database Name
  const dbName = "proyecto2";


  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertDocuments(req, string, db, (data) => {
      callback(data);
      client.close();
    });

  });
}

router.get("/getTutores", function (req, res, next) {
  getRecursos("tutor", (data) => res.send(data));
});

router.get("/getProductos", function (req, res, next) {
  getRecursos("producto", (data) => res.send(data));
});

router.get("/getGeneral", function (req, res, next) {
  getRecursos("general", (data) => res.send(data));
});

router.get("/getFormularios", function (req, res, next) {
  getRecursos("formulario", (data) => res.send(data));
});

router.get("/getEventos", function (req, res, next) {
  getRecursos("evento", (data) => res.send(data));
});

router.get("/getComidas", function (req, res, next) {
  getRecursos("comida", (data) => res.send(data));
});

router.get("/getApuntes", function (req, res, next) {
  getRecursos("apunte", (data) => res.send(data));
});

router.get("/getUsuario", function (req, res, next) {
  getRecursos("usuario", (data) => res.send(data));
});

//////////////////////////////////////////////////////

router.post("/postTutor", function (req, res, next) {
  postRecurso(req, "tutor", (data) => res.send(data));
});

router.post("/postProducto", function (req, res, next) {
  postRecurso(req, "producto", (data) => res.send(data));
});

router.post("/postGeneral", function (req, res, next) {
  postRecurso(req, "general", (data) => res.send(data));
});

router.post("/postFormulario", function (req, res, next) {
  postRecurso(req, "formulario", (data) => res.send(data));
});

router.post("/postEvento", function (req, res, next) {
  postRecurso(req, "evento", (data) => res.send(data));
});

router.post("/postComida", function (req, res, next) {
  postRecurso(req, "comida", (data) => res.send(data));
});

router.post("/postApunte", function (req, res, next) {
  postRecurso(req, "apunte", (data) => res.send(data));
});

router.post("/postUsuario", function (req, res, next) {
  postRecurso(req, "usuario", (data) => res.send(data));
});
router.post("/usuario", function (req, res) {
  var user = new Usuario();
  user.nombre = req.body.nombre;
  user.usuario = req.body.usuario;
  user.password = req.body.password;
  user.save(function (err) {
    if (err) {
      // duplicate entry
      if (err.code == 11000)
        return res.json({ success: false, message: "Ya existe un usuario con ese login. " });
      else
        return res.send(err);
    }

  });
  return res.json({ success: true, message: "Usuario agregado" });

});



//lOG IN EN LA APLICACIÓN -----------------------------------------------------------------------------------------------------------
router.post("/authenticate", function (req, res) {

  Usuario.findOne({
    usuario: req.body.usuario
  }).select("_id nombre").exec(function (err, user) {
    if (err) throw err;

    // no user with that username was found
    if (!user) {
      res.json({
        success: false,
        code: 2,
        message: "El nombre de usuario no existe."
      });
    } else if (user) {

      // check if password matches
      var validPassword = user.comparePassword(req.body.password);
      if (!validPassword) {
        res.json({
          success: false,
          message: "Contraseña incorrecta"
        });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign({
          _id: user.id,
          nombre: user.nombre,
          usuario: user.usuario,
        }, superSecret);
        // return the information including token as JSON
        return res.json({
          success: true,
          message: "Enjoy your token!",
          token: token
        });
      }

    }

  });
});

module.exports = router;
