xammagikApp.controller("resultscontroller", function ($scope,$rootScope,$timeout) {
	
	$scope.results=[];
	
 
	  socket.on('users', function (data) {
		$scope.$apply(function () {
			$scope.results.push(data)
		});
		
	  });
});