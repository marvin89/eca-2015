ecaApp.controller ('loginController', ['$scope', '$state', function($scope, $state){
	$scope.login = function() {
		$state.go("team");
	}
}])
