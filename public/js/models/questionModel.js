define([
	 'underscore', // lib/underscore/underscore
	 'backbone', // lib/backbone/backbone
 ], function($,Backbone){
var QuestionModel = Backbone.Model.extend({
	defualts:{
		questionID:"",
		Question:"question 1",
		AnswerType:{
			"Single":{"name":"radio"},
			"Multiple":{"name":"checkbox"}
		},
		noofAnswers:4
	}
});//defining

return QuestionModel;
});



