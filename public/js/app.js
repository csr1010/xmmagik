var xammagikApp = angular.module("xammagikApp",['ngRoute','ngSanitize']);
var screen_change_events = "webkitfullscreenchange mozfullscreenchange fullscreenchange";
/*$(document).on(screen_change_events, function () {
	if(document.webkitIsFullScreen || document.mozIsFullScreen){
	  $(".instructions").css({
		    'margin-top':"150px"
		  });
		  $("#examContainer").css({
		   height:'500px'
		  })
	}
});*/
  window.addEventListener('beforeunload', function(event) {

   var currentLoggedUser = {
					     "user":"",
						 "time":""
					   }
sessionStorage.setItem("currentUser",JSON.stringify(currentLoggedUser));
sessionStorage.setItem("currentexamID","");
 var hiddenObj = {
			 count:0,
			 url:$location.$$path
	 };
	  sessionStorage.setItem("isHiddenCount", JSON.stringify(hiddenObj));
      });
      window.addEventListener('unload', function(event) {
       var currentLoggedUser = {
					     "user":"",
						 "time":""
					   }
sessionStorage.setItem("currentUser",JSON.stringify(currentLoggedUser));
sessionStorage.setItem("currentexamID","");
 var hiddenObj = {
			 count:0,
			 url:$location.$$path
	 };
	  sessionStorage.setItem("isHiddenCount", JSON.stringify(hiddenObj));
      });
