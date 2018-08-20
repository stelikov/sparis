var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sparis");
  
  var user = {
      CategoryId: 1,
      Name: "Health",
      Description: "Health"
   };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = {
      CategoryId: 2,
      Name: "Cleaning",
      Description: "Cleaning"
   };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user =  {
      CategoryId: 3,
      Name: "Driving",
      Description: "Driving"
   };
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user =    {
      CategoryId: 4,
      Name: "Shooting",
      Description: "Shooting"
   };
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
   user = {
      CategoryId: 5,
      Name: "Beauty",
      Description: "Beauty"
   };
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      CategoryId: 6,
      Name: "BabySitter",
      Description: "BabySitter"
   }
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      CategoryId: 7,
      Name: "Fashion",
      Description: "Fashion"
   }
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      CategoryId: 8,
      Name: "Photography",
      Description: "Photography"
   };
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user =  {
      CategoryId: 9,
      Name: "Sports",
      Description: "Sports"
   }
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      CategoryId: 10,
      Name: "Sexual",
      Description: "Sexual"
   }
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
     user = {
      CategoryId: 11,
      Name: "Masseuse",
      Description: "Masseuse"
   }
   
  dbo.collection("categories").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});