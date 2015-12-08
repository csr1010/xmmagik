xammagikApp.factory('getJsonFactory', function($http) {
   return {
        getData: function(options) {
             //return the promise directly.
              return $http(options);
        }
   };
});
xammagikApp.controller("registrationController", function ($scope, $http,getJsonFactory ,$timeout,$location) {
	
	$scope.userName ="";
	$scope.password ="";
	$scope.height="2500px";
	$scope.userJson = {
			_id:"",
			empid:"",
			pwd:"",
			exams:[]
	
	};
		$scope.logJson = {
			empid:"",
			pwd:""
		};
	$scope.signIn = function(){
	$scope.logJson = {
			empid:$scope.userName,
			pwd:$scope.password
		};
		if(isNaN($scope.userName) || $scope.userName.length!=6)
			{
				$scope.userName="";
			}
		if(logform.checkValidity() && $scope.userName!="")
		  getJsonFactory.getData(
				  {
					  "method":"POST",
					  "url":"/signin",
					  "cache":"false",
					  "data": $scope.logJson,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) {
				 	if(result.data.hasOwnProperty('msg') && result.data.msg=="success"){
					   var currentLoggedUser = {
					     "user":$scope.userName,
						 "time":new Date().getTime()
					   }
				       sessionStorage.setItem("currentUser",JSON.stringify(currentLoggedUser));
					var   url =  '/dashboard/'+ $scope.userName;
					$location.path(url);
					//$scope.$apply();
 					}
					else{
					 $(".alert-danger").addClass("in").find("small").text(result.data);
                                         setTimeout(function(){
						$(".alert-danger").removeClass("in");
					},4000);
					}
					});
		
	};
	$scope.$on("$routeChangeSuccess",function(err,route,prev){
		$("body").css({
		 "background-image":"url('../../images/sc.jpg')"
		});
		   var hiddenObj = {
			 count:0,
			 url:$location.$$path
	 };
	  sessionStorage.setItem("isHiddenCount", JSON.stringify(hiddenObj));
		 					   var currentLoggedUser = {
					     "user":"",
						 "time":new Date().getTime()
					   }
				       sessionStorage.setItem("currentUser",JSON.stringify(currentLoggedUser));

		$("#headerInfo").css({
			  opacity:0,
			  'margin-right': '-15%'
			});
			$(".logoff").css({
				'box-shadow': '2px 0px 1px rgb(71, 66, 66)',
				transform:'rotateY(0deg)'
			})
			$(".userdetail").css({
				'box-shadow': '2px 0px 1px rgb(71, 66, 66)',
				transform:'rotateY(0deg)'
			})
		
	});
	$scope.register = function(){
		$scope.userJson._id = $scope.userName;
		$scope.userJson.empid = $scope.userName;
		$scope.userJson.pwd = $scope.password;
		$scope.userJson.exams=[];
		$scope.userJson.exams.push({
			 examid:"",
			 examdate:new Date().toDateString(),
			 attempts:0,
			 marks:0 
		});

		if(isNaN($scope.userName) || $scope.userName.length!=6)
			{
				$scope.userName="";
			}
		if(logform.checkValidity() && $scope.userName!="")
		  getJsonFactory.getData(
				  {
					  "method":"POST",
					  "url":"/register",
					  "cache":"false",
					  "data": $scope.userJson,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) {
				 	if(result.data=="success"){
					 $(".alert-success").addClass("in").find("small").text("Registration Success");
					setTimeout(function(){
						$(".alert-success").removeClass("in");
					},4000);
 					}
					else{
					 $(".alert-danger").addClass("in").find("small").text("Registration Failed,contact Admin for assistance");
                                         setTimeout(function(){
						$(".alert-danger").removeClass("in");
					},4000);
					}
			 }); 
	}
	
});