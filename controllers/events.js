var express = require('express');
var router = express.Router();
var MongoClient  = require('mongodb');
var url = "mongodb://localhost:27017/";
// Home page route.
router.get('/getEvent', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/addEvent', function (req, res) {
  
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("sparis");
	  
	  var userId = 12;
	  
	  var event = {
		  Name: "Health",
		  Description: "Health",
		  DateCreated: new Date(Date.now()).toISOString(),
		  DateStart: new Date(Date.now()).toISOString(),
		  DateEnd: new Date(Date.now()).toISOString(),
		  TimeStart: new Date().getTime(),
		  TimeEnd: new Date().getTime(),
		  UserId: userId
	   };
	   
	  dbo.collection("events").insertOne(event, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
	  });
	});	
	
	res.send("ok");
})

router.get('/getEvents', function (req, res) {
	
	console.log(req.body);
	console.log(req.query);
	
	
	var p = {};
	if(req.query.id){
		//5b7bca35db4bfe1d84dfdfd1
		var ObjectId = require('mongodb').ObjectId; 
	//	p._id = new ObjectId(req.query.id);		
	}
	//if(req.query.datestart){
		p.DateStart = {$gte:new Date("2017-04-14T23:59:59Z").toISOString()};
	//}
	//db.collection.find({"createdDate":{$gte:new ISODate("2017-04-14T23:59:59Z"),$lte:new ISODate("2017-04-15T23:59:59Z")}}).count();

	
	console.log(p);
	if(req.query.id){
		//5b7bca35db4bfe1d84dfdfd1
		var ObjectId = require('mongodb').ObjectId; 
		//p._id = new  ObjectId(req.query.id);		
	}
	
	var ObjectId = require('mongodb').ObjectId; 
	p._id = new  ObjectId("5b7bca35db4bfe1d84dfdfd1");
	//p.Name = "Health";
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("sparis");
	  
	  var userId = 12;
	  
	  var event = {
		  Name: "Health",
		  Description: "Health",
		  DateCreated: new Date(Date.now()).toISOString(),
		  DateStart: new Date(Date.now()).toISOString(),
		  DateEnd: new Date(Date.now()).toISOString(),
		  TimeStart: new Date().getTime(),
		  TimeEnd: new Date().getTime(),
		  UserId: userId
	   };
	   
	   dbo.collection("events").find({"DateStart": {
    '$gte': Date("2018-03-06T13:10:40.294Z"),
    '$lt': Date("2018-11-06T13:10:40.294Z")
}}).toArray( function(err1, result) {
			if (err1) throw err1;
			console.log('sadasd');
			console.log(result);
			res.send(result);
			if(result){
						
			} else{
						
			}
		});
	   
	   
	});	
	
})


module.exports = router;