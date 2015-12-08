xammagikApp.controller("answerController", function ($rootScope,$scope, $http,getJsonFactory , $interval,$timeout,$location,$anchorScroll) {
	
	 $scope.hrs="00";
	 $scope.mnts="00";
	 $scope.sec="00";
	 var prevMS = new Date().getTime();
	 
	 var hidden, visibilityChange; 
	 var hiddenObj = {
			 count:0,
			 url:$location.$$path
	 };
	  sessionStorage.setItem("isHiddenCount", JSON.stringify(hiddenObj));
	 	$scope.toggleFullScreen =  function() {
		  
		 /*   if (document.documentElement.requestFullscreen) {
		      document.documentElement.requestFullscreen();
		    } else if (document.documentElement.msRequestFullscreen) {
		      document.documentElement.msRequestFullscreen();
		    } else if (document.documentElement.mozRequestFullScreen) {
		      document.documentElement.mozRequestFullScreen();
		    } else if (document.documentElement.webkitRequestFullscreen) {
		      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		    }
		  $(".instructions").css({
		    'margin-top':"83%"
		  });
		  $("#examContainer").css({
		   height:'600px'
		  })
		  $(".endtestdiv").css({
		    bottom:"54%"
		  });*/
		};
	
	 if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
	   hidden = "hidden";
	   visibilityChange = "visibilitychange";
	 } else if (typeof document.mozHidden !== "undefined") {
	   hidden = "mozHidden";
	   visibilityChange = "mozvisibilitychange";
	 } else if (typeof document.msHidden !== "undefined") {
	   hidden = "msHidden";
	   visibilityChange = "msvisibilitychange";
	 } else if (typeof document.webkitHidden !== "undefined") {
	   hidden = "webkitHidden";
	   visibilityChange = "webkitvisibilitychange";
	 }
	  $scope.handleVisibilityChange = function() {
		  if (document[hidden]) {
			  
			  hiddenObj = JSON.parse(sessionStorage.getItem("isHiddenCount"));
			  if($location.path() == hiddenObj.url){
				  hiddenObj.count++;
				  sessionStorage.setItem("isHiddenCount", JSON.stringify(hiddenObj));
			  }
		  } else {
			  hiddenObj = JSON.parse(sessionStorage.getItem("isHiddenCount"));
			  if($location.path() == hiddenObj.url){
				  if(hiddenObj.count == 3){
					  alert("warning 1 . Please dont often leave the test ....")
				  }
				  else if(hiddenObj.count == 5){
					  alert("warning 2 . please dont use search meachanisms to find the answers")
				  }
				  else if(hiddenObj.count == 7){
					  alert("warning 3 . that last warning, your test will be submitted next time automaticlally")
				  }
				  else if(hiddenObj.count == 9){
					  $scope.savetest(); 
				  }
			  }
		  }
		};
	 document.addEventListener(visibilityChange, $scope.handleVisibilityChange, false);
	 

			 $scope.$on("$routeChangeSuccess",function(err,route,prev){
		var obj = {
			     empid:JSON.parse(sessionStorage.getItem("currentUser")).user,
				 examid:sessionStorage.getItem("currentexamID")
			   }
		 getJsonFactory.getData(
				  {
					  "method":"GET",
					  "url":"/questions/"+obj.examid,
					  "cache":"false",
					  //"data":sessionStorage.getItem("currentexamID"),
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) { 
			 console.log(result.data)
			     $scope.test=result.data;
				 //$scope.toggleFullScreen();
			 });
			 
			  getJsonFactory.getData(
				  {
					  "method":"POST",
					  "url":"/setattempts",
					  "cache":"false",
					  "data": obj,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
				  	var hrs = '00';
						var timer =  $interval(function(){
							hrs = $scope.getjourneyHours(new Date().getTime()-prevMS);
							if(hrs =='01'){
								 $interval.cancel(timer);
								   $scope.savetest();
							}
						},1000);
		});
	$scope.test = {};
	 	$scope.scrollTo =function(id){
		 var hash = "#"+id;
		 $(hash).css({
			 "opacity":0
		 });
		 var t= $(hash);
		    var t=t.length&&t||$('[name='+hash.slice(1)+']');
		    if(t.length){
		        var tOffset=t.position().top;
		        $('#examContainer').scrollTop(tOffset +Math.abs($("#QS1").position().top));
		        setTimeout(function(){
		        	$(hash).css({
						 "opacity":1
					 });
		        },250);
		        
		        return false;
		    }
	};
	 $scope.updatepager =function(id){
		 //console.log($location.hash())
		 for(var i in $scope.test.Questions){
			 if($scope.test.Questions[i]._id == id){
				 if($scope.test.Questions[i].type=="radio"){
					 $("#a"+id).css({background:'rgb(203, 240, 203)'});
					 break;
				 }
				 else{
					 $timeout(function(){
						 for(var inr in $scope.test.Questions[i].options)
						 		if($scope.test.Questions[i].options[inr].val){
						 			 $("#a"+id).css({background:'rgb(203, 240, 203)'});
						 			 break;
						 		}
						 		else{
						 			 $("#a"+id).css({background:'#fff'});
						 		} 
					 },50);
					break; 	
				 }
			 }
		 }
		
	 };


	 $scope.getjourneyHours = function(ms){
		var hours=minutes=sec=0;
		hours = Math.floor(ms/(60*60*1000)) < 10?"0"+Math.floor(ms/(60*60*1000)):Math.floor(ms/(60*60*1000));//get hours
		ms = ms % (60*60*1000);// after calculating hous ,find the remaining millisecons, then calulate minutes
		minutes = Math.floor(ms/(60*1000))<10?"0"+Math.floor(ms/(60*1000)):Math.floor(ms/(60*1000));
		ms= ms %(60*1000);
		sec =Math.floor(ms/(1000))<10?"0"+Math.floor(ms/(1000)):Math.floor(ms/(1000));
		
		$scope.hrs = hours;
		$scope.mnts = minutes;
		$scope.sec = sec;
		return $scope.hrs ;
	    };
	$scope.savetest = function(){
		for(var i in $scope.test.Questions){
			if($scope.test.Questions[i].type=="checkbox"){
				$scope.test.Questions[i].result=[];
				for(var j in $scope.test.Questions[i].options){
							$scope.test.Questions[i].result.push($scope.test.Questions[i].options[j].val);
						}
					
				}
				
			}
		$scope.test.empid = JSON.parse(sessionStorage.getItem("currentUser")).user;
		getJsonFactory.getData(
				  {
					  "method":"POST",
					  "url":"/questions",
					  "cache":"false",
					  "data": $scope.test,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) { 
			$(".alert-success").addClass("in").find("small").text("Your marks : "+result.data.marks);
			sessionStorage.setItem("marks",result.data.marks);
					setTimeout(function(){
						$(".alert-success").removeClass("in");
					},7000);
					$location.path("/dashboard/"+JSON.parse(sessionStorage.getItem("currentUser")).user);
			 });
		
	}
	
	
	
});