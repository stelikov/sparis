// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();


// configuration =========
// =======================
var port =  process.env.PORT||80;

var apiRoutes = express.Router(); 

apiRoutes.get('/', function(req, res) {
		
	res.json({ success: true, message: '111Authentication failed' });
	
});  
apiRoutes.get('/xxx', function(req, res) {
		
	res.json({ success: true, message: 'Authentication failed' });
	
});  


// apply the routes to our application with the prefix /api
app.use('/', apiRoutes);

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);