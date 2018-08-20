var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sparis");
  
  var myquery = {  };
   dbo.collection("userCategories").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
  
  
  var user = {
      Id: 1,
      CategoryId: 1,
      UserId: 2
   };
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = {
      Id: 2,
      CategoryId: 2,
      UserId: 2
   };
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user =  {
      Id: 3,
      CategoryId: 1,
      UserId: 3
   };
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user =   {
      Id: 4,
      CategoryId: 1,
      UserId: 4
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user =  {
      Id: 5,
      CategoryId: 5,
      UserId: 2
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      Id: 6,
      CategoryId: 6,
      UserId: 2
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      Id: 7,
      CategoryId: 7,
      UserId: 2
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      Id: 8,
      CategoryId: 8,
      UserId: 2
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user =  {
      Id: 9,
      CategoryId: 2,
      UserId: 4
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      Id: 10,
      CategoryId: 2,
      UserId: 1
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      Id: 11,
      CategoryId: 10,
      UserId: 2
   };
   
  dbo.collection("userCategories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});