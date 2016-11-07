/  <src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"/>


var myApp = angular.module("myModule",[]);

/*var myController= function ($scope) {
	$scope.message="angularjs tutorial";
	// body...
}
*/
myApp.controller("myController", function ($scope) {
	$scope.message="angularjs tutorial";
	// body...);

});


/*var myController("myController",($scope))*/