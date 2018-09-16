var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');




const findDocuments = function(string, db, callback) {
  // Get the documents collection
  const collection = db.collection(string);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    callback(docs);
  });
}

function getRecursos(string, callback)
{
  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'proyecto2';


  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(string, db,(data)  => {
    callback(data);
    client.close();
  });

});
}

const insertDocuments = function(req, string, db, callback) {
  // Get the documents collection
  const collection = db.collection(string);
  // Insert some documents
  const objeto = req.query;

  collection.insertMany([objeto], 
    function(err, result) {
    assert.equal(err, null);
    callback(result);
  });
}

function postRecurso(req, string, callback)
{
  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'proyecto2';


  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(req, string, db,(data)  => {
    callback(data);
    client.close();
  });

});
}

router.get('/getTutores', function(req, res, next) {
  getRecursos ('tutor', (data) => res.send(data));
});

router.get('/getProductos', function(req, res, next) {
  getRecursos ('producto', (data) => res.send(data));
});

router.get('/getGeneral', function(req, res, next) {
  getRecursos ('general', (data) => res.send(data));
});

router.get('/getFormularios', function(req, res, next) {
  getRecursos ('formulario', (data) => res.send(data));
});

router.get('/getEventos', function(req, res, next) {
  getRecursos ('evento', (data) => res.send(data));
});

router.get('/getComidas', function(req, res, next) {
  getRecursos ('comida', (data) => res.send(data));
});

router.get('/getApuntes', function(req, res, next) {
  getRecursos ('apunte', (data) => res.send(data));
});

//////////////////////////////////////////////////////

router.post('/postTutor', function(req, res, next) {
  postRecurso (req, 'tutor', (data) => res.send(data));
});

router.post('/postProducto', function(req, res, next) {
  postRecurso (req, 'producto', (data) => res.send(data));
});

router.post('/postGeneral', function(req, res, next) {
  postRecurso (req, 'general', (data) => res.send(data));
});

router.post('/postFormulario', function(req, res, next) {
  postRecurso (req, 'formulario', (data) => res.send(data));
});

router.post('/postEvento', function(req, res, next) {
  postRecurso (req, 'evento', (data) => res.send(data));
});

router.post('/postComida', function(req, res, next) {
  postRecurso (req, 'comida', (data) => res.send(data));
});

router.post('/postApunte', function(req, res, next) {
  postRecurso (req, 'apunte', (data) => res.send(data));
});

module.exports = router;
