var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sparis");
  var user = { id:1, name: "vadim", password: "test", admin: true };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = { id:2, name: "tatjana", password: "12345", admin: true };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = { id:3, name: "denis", password: "12454", admin: true };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = { id:4, name: "ksistof", password: "stone", admin: true };
  dbo.collection(categories).insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = { id:5, name: "broom", password: "2123123", admin: false };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});