	 var express  = require('express');  
	 var http  = require('http'); 
	// var https = require('https');
	            var app      = express();
	          //  var fs = require('fs');
	  
/*var options = {
   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};*/
  GLOBAL.mongojs = require('mongojs');
//	GLOBAL.MongoWatch = require('mongo-watch');
  
 //mongodb://csr:root@widmore.mongohq.com:10000/xmmagik
  GLOBAL.db = mongojs('mongodb://csr:root@ds063307.mongolab.com:63307/xammagik',['userstests','examslisttests','questionstests','answertests' ]);
	    //var db = mongoose.connect('mongodb://localhost/xammagik');
	    app.configure(function() {
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
		app.use(express.methodOverride()); 						// simulate DELETE and PUT
	}); 

   	 var server = http.createServer(/*options,*/app).listen(process.env.PORT ||3000);
	 console.log("App listening on port i laaka laka lal"+server.address().port);
	  GLOBAL.io = require('socket.io').listen(server);
	/*	 
	var xlsx = require('node-xlsx');

var obj = xlsx.parse('Book1.xlsx'); // parses a file
console.log(obj.worksheets[0].data)*/
	app.get('/', function(req, res) {
		res.sendfile('./public/ExamMagik.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
	//app.use(express.basicAuth(function(user, pass) {
		//	return user === 'testUser' && pass === 'testPass';
	//}));

	//Bootstrap routes
	require('./routes/restRouter')(app);
	