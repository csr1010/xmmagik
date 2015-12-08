define([
   	 'underscore', // lib/underscore/underscore
   	 'backbone', // lib/backbone/backbone
   	'views/Registration/answerview'
    ], function($,Backbone,answerView){
	var AnswersModel = Backbone.Model.extend({
		defualts:{
			Answers:{
				"1":{"answer":"enter answer 1 "},
				"2":{"answer":"enter answer 2 "},
				"3":{"answer":"enter answer 3 "},
				"4":{"answer":"enter answer 4 "}
			}
		},
	  initialize:function(){
		  var answersViewObj = new answerView({el:"#answersList"});
		  this.on("change:Answers",function(model){
			  answersViewObj.render(model);
		  });
	  }
	});//defining

   return AnswersModel;
   });



