var MongoClient = require('mongodb').MongoClient;
var url = ""; //paste from mongodb atlas

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mymongodb");
    dbo.createCollection("students", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
});

