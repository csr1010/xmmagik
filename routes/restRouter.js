var async = require('async');

module.exports = function(app) {
    //Client Routes
    var clients = require('../api/login');
	var exams = require('../api/exams');
	var questions = require('../api/questions');
	
    app.get('/exams', exams.findallexams);
	app.get('/questions/:examid', questions.findallquestions);
	app.get('/attempts/:empid', questions.getattempts);
	app.post('/setattempts', questions.setattempts);
	app.post('/questions', questions.saveallquestions);
    app.post('/register', clients.create);
    app.post('/signIn', clients.findbyID);
    //app.put('/clients/:clientId', clients.update);
    //app.del('/clients/:clientId', clients.destroy);

    //Finish with setting up the clientId param
   // app.param('clientId', clients.client);
};