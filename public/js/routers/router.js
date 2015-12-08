xammagikApp.config(function($routeProvider,$locationProvider,$provide) {
//	$locationProvider.html5Mode(true);
  $routeProvider
    .when('/home', {
      controller:'registrationController',
      templateUrl:'../html/Registraion.html'
    })
    .when('/dashboard/:empid', {
      controller:'dashboardController',
      templateUrl:'../html/dashboard.html'
    })
    .when('/exam/:id', {
      controller:'answerController',
      templateUrl:'../html/answers.html'
    }).when('/results', {
      controller:'resultscontroller',
      templateUrl:'../html/results.html'
    }).otherwise({
      redirectTo:'/home'
    });
/*    $provide.decorator('$sniffer', function($delegate) {
        $delegate.history = historyCompatCheck();
        return $delegate;
   });*/
   
  
}).run( function($rootScope, $location,getJsonFactory, $cacheFactory) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
						   
    	if(sessionStorage.getItem("currentUser")==null || JSON.parse(sessionStorage.getItem("currentUser")).user =="")
		{
		  $location.path("/home");
		} 
		else if(next && next.$$route.originalPath =="/dashboard/:empid"){
		    var datas = JSON.parse(sessionStorage.getItem("currentexaminfo"));
			if(datas)
			socket.emit('message', datas);
			$("body").css({
		 "background-image":'none'
		});
		}
        else if(next && next.$$route.originalPath =="/exam/:id")		{
		$("body").css({
		 "background-image":'none'
		});
		var obj = {
			     empid:JSON.parse(sessionStorage.getItem("currentUser")).user,
				 examid:sessionStorage.getItem("currentexamID")
			   }
			   $cacheFactory.get('$http').removeAll();
		getJsonFactory.getData(
				  {
					  "method":"GET",
					  "url":"/attempts/"+obj.empid,
					  "cache":"false",
					  //"data": obj,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) { 
			   if(result.data != "success"){
			    $location.path("/home");
				alert("exceeded attempts")
			   }
			 })
		    /*  if (document.documentElement.requestFullscreen) {
		      document.documentElement.requestFullscreen();
		    } else if (document.documentElement.msRequestFullscreen) {
		      document.documentElement.msRequestFullscreen();
		    } else if (document.documentElement.mozRequestFullScreen) {
		      document.documentElement.mozRequestFullScreen();
		    } else if (document.documentElement.webkitRequestFullscreen) {
		      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		    }*/
		}
    });
 });