// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');

// configuration =========
// =======================
var port =  80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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