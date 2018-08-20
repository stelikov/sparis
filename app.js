// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var MongoClient    = require('mongodb');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./models/user'); // get our mongoose model
var wiki = require('./controllers/auth.js');

var url = "mongodb://localhost:27017/";

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
//mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));


// API ROUTES -------------------
// we'll get to these in a second

// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router(); 

apiRoutes.get('/xxx', function(req, res) {
		
	res.json({ success: true, message: 'Authentication failed' });
	
});  


// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {

	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("sparis");
	  
	   dbo.collection("users").findOne({ name: req.body.name, password: req.body.password }, function(err, result) {
		if (err) throw err;
		
		if(result){
			
		} else{
			C
		}
	
		var token = jwt.sign({id: result.id}, app.get('superSecret'), {
		  expiresIn: "30d" // expires in 24 hours
		});
		
		res.json({
		  success: true,
		  message: 'Enjoy your token!',
		  token: token
		});
		
		db.close();
	  });
	});
});

// TODO: route middleware to verify a token


// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
		
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var userId = 0;
	jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
		userId = decoded.id;	  
	});
	
	if (userId == 0){
		res.json({ success: false, message: 'Authentication failed' });
	}
	console.log(userId);
	
});  

apiRoutes.get('/categories', function(req, res) {
		
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var userId = 0;
	jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
		userId = decoded.id;	  
	});
	
	if (userId == 0){
		res.json({ success: false, message: 'Authentication failed' });
	}
	
	console.log(userId);
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("sparis");
	 
			dbo.collection("userCategories").find({ UserId: userId}).toArray( function(err1, result) {
			if (err1) throw err1;
				
			console.log(result);
				
			if(result){
						
			} else{
						
			}
		});

	});
	
});


// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
	
    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);