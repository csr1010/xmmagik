define([
	 'jquery', // lib/jquery/jquery
	 'underscore', // lib/underscore/underscore
	 'backbone', // lib/backbone/backbone
	 'text!../../../html/Registraion.html',
	 'models/questionModel',
	 'models/answerModel'
 ], function($, _, Backbone,Questionview,questionModel,answerModel){
	
	var questionModelObj = new questionModel({
		questionID:"",
		Question:"question 1",
		AnswerType:{
			"Single":{"name":"radio"},
			"Multiple":{"name":"checkbox"}
		},
		noofAnswers:4
	});
	
	var QuestionView = Backbone.View.extend({
	initialize:function(){
		this.render();
	},
	//tagName:"#Questionform",
	render:function(){
		var htmlfile = _.template($(Questionview).html(),questionModelObj.toJSON());
		this.$el.html(htmlfile)
	},
	events:{
		"keyup #noofAnswers":function(e){
			var sampleObj={};
			for(var i=1;i<=e.currentTarget.value;i++){
				sampleObj[i]= {"answer":"ent ans ->"+i};
			}
			var AnswersModelObj = new answerModel;
			AnswersModelObj.set({"Answers":sampleObj});
		}
	}
});
	var initQuestionView  = function(id){
		var QuestionViewObj = new QuestionView({el:$(id)});
	};
	return {
		initialize:initQuestionView
	};
});
