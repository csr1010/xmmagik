require.config({
		 paths: {
		 jquery: 'libs/jquery-min',
		 underscore: 'libs/underscore-min',
		 backbone: 'libs/backbone-min'
		 }

 });
require([
'app'
], function(App){
	App.initialize();
});