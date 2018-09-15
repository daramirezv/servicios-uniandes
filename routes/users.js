var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');




const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('tutor');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    callback(docs);
  });
}

function getTutores(callback)
{
  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'proyecto2';


  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db,(data)  => {
    callback(data);
    client.close();
  });

});

}
router.get('/getTutores', function(req, res, next) {
  getTutores ((data) => res.send(data));
});

module.exports = router;
