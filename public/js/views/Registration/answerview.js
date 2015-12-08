define([
	 'jquery', // lib/jquery/jquery
	 'underscore', // lib/underscore/underscore
	 'backbone', // lib/backbone/backbone
	 'text!../../../html/answers.html',
 ], function($, _, Backbone,answersView){

	var AnswersView = Backbone.View.extend({
		
		render:function(answerModel){
			var htmlfile = _.template($(answersView).html(),answerModel.toJSON());
			this.$el.html(htmlfile);
		}
	});
	
	return AnswersView;
});
	
	




