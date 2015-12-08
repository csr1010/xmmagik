xammagikApp.controller("dashboardController", function ($rootScope,$scope, $http,getJsonFactory ,$timeout,$rootScope,$location, $cacheFactory) {
	
$scope.Navleft = [
                  {"Name":"EGZAMS","icon":" glyphicon-th-list","color":"rgb(214, 152, 144)","status":"activeNav"},
               //   {"Name":"METRIKS","icon":"glyphicon-stats","color":"rgb(223, 110, 159)","status":""},
                  {"Name":"QOSHUNS","icon":"glyphicon-briefcase","color":"rgb(120, 175, 151)","status":""},
                  ];
$scope.ExamsList = [];	

	 
$scope.marks =[
                     {
                      "_id":"ASsf45fg5","empID":"533135","percent":99,"position":2,
                      "metriks":[
                                 {"pers" :25,"text":"10-30","color":"rgb(235, 216, 255)"},
                                 {"pers":56 ,"text":"31-60","color":"rgb(204, 255, 194)"},
                                 {"pers":75,"text":"61-90","color":" rgb(245, 231, 187)"},
                                 {"pers":100,"text":"91-100","color":" rgb(221, 226, 255)"}
                      ],
                      "comments":[
                                  {"_id":"533135" ,"other":"left","comment":"hi dude how are you"},
                                  {"_id":"533245" ,"other":"right","comment":"Ya i am fine and what about  you"},
                                  {"_id":"533245" ,"other":"right","comment":"so what about the exam ? "},
                                  {"_id":"533135" ,"other":"left","comment":"yeah sounds good..."},
                                  {"_id":"533245" ,"other":"right","comment":"Ya i am fine and what about  you"},
                                  {"_id":"533245" ,"other":"right","comment":"so what about the exam ? "},
                                  ]
                     },
                     {
                         "_id":"45fg545","empID":"533135","percent":35,"position":4,
                         "metriks":[
                                    {"pers" :45,"text":"10-30","color":"rgb(199, 199, 164)"},
                                    {"pers":78 ,"text":"31-60","color":"rgb(123, 201, 173)"},
                                    {"pers":100,"text":"61-90","color":" rgb(255, 194, 0)"},
                                    {"pers":34,"text":"91-100","color":" rgb(156, 163, 209)"}
                         ],
                     "comments":[
                                 {"_id":"533135" ,"other":"left","comment":"hi dude how are you"},
                                 {"_id":"533245" ,"other":"right","comment":"Ya i am fine and what about  you"},
                                 {"_id":"533245" ,"other":"right","comment":"so what about the exam ? "},
                                 {"_id":"533135" ,"other":"left","comment":"yeah sounds good..."}
                                ]
                        }
               ];
			   $scope.getExam = function(data){
			   var obj = {
			     empid:JSON.parse(sessionStorage.getItem("currentUser")).user,
				 examid:data._id
			   }
			    $cacheFactory.get('$http').removeAll();
			    getJsonFactory.getData(
				  {
					  "method":"GET",
					  "url":"/attempts/"+obj.empid,
					  "cache":"false",
					 // "data": obj,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) { 
			// console.log(result.data)
			   if(result.data == "success"){
			     sessionStorage.setItem("currentexamID",data._id);
				 sessionStorage.setItem("currentexaminfo",JSON.stringify(data));
				 var   url =  '/exam/'+ data._id;
				 $location.path(url)
				 }
				 else{
				  alert("exceeded attempts")
				 }
			 });
			   
			   };
			 $scope.$on("$routeChangeSuccess",function(err,route,prev){
	$("#headerInfo").css({
		  opacity:1	,
		  'margin-right': '-5%'
		});
		$(".logoff").css({
			'box-shadow': '2px 0px 1px rgb(71, 66, 66)',
			transform:'rotateY(-32deg)'
		})
		$(".userdetail").css({
			'box-shadow': '2px 0px 1px rgb(71, 66, 66)',
			transform:'rotateY(-32deg)'
		})
		
		 getJsonFactory.getData(
				  {
					  "method":"GET",
					  "url":"/exams",
					  "cache":"false",
					 // "data": $scope.logJson,
					  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					  }
				  )
			 .then(function(result) { 
			// console.log(result.data)
			     $scope.ExamsList=result.data;
			 });
	
});

$scope.currentMarks = {
 metriks:[]
};

	  socket.on('results', function (data) {
	  console.log(data);
		$scope.$apply(function () {
						$scope.currentMarks.metriks = data;
						sessionStorage.setItem("bardata",JSON.stringify(data));
						$scope.finalmarks = Number(sessionStorage.getItem("marks"));
						if( $scope.finalmarks >= 0 &&  $scope.finalmarks < 11)
							{
								$scope.personPlacer = 25;
							}
							else if( $scope.finalmarks >= 11 && $scope.finalmarks < 21)
							{
								$scope.personPlacer = 85;
							}
							else if( $scope.finalmarks >=21 &&  $scope.finalmarks < 31)
							{
								$scope.personPlacer = 155;
							}
							else if( $scope.finalmarks >=31 && $scope.finalmarks < 40)
							{
								$scope.personPlacer = 225;
							}
		});
		
	  });
$scope.personPlacer=0;
$scope.activateNav = function(data){
	
	
	for(var i in $scope.Navleft){
		if($scope.Navleft[i].Name == data.Name){
			$scope.Navleft[i].status = "activeNav";
		}
		else{
			$scope.Navleft[i].status = "";
		}
	}
};

$scope.getMetriks = function(data){
	//toggleFullScreen();
	for(var i in $scope.marks)
	if(data._id == $scope.marks[i]._id ){
		$scope.currentMarks =  $scope.marks[i];
		if( $scope.marks[i].percent >= 0 &&  $scope.marks[i].percent < 31)
		{
			$scope.personPlacer = 25;
		}
		else if( $scope.marks[i].percent >= 31 && $scope.marks[i].percent < 60)
		{
			$scope.personPlacer = 85;
		}
		else if( $scope.marks[i].percent >=61 &&  $scope.marks[i].percent < 90)
		{
			$scope.personPlacer = 155;
		}
		else if( $scope.marks[i].percent >=91 && $scope.marks[i].percent < 100)
		{
			$scope.personPlacer = 225;
		}
				
	}
};
	
});