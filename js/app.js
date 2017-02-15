angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log("this is the helloWorld controller function in the mainCtrl, it is now working.");
  };
  //creating fake todos array for testing purposes
  $scope.todos = [
    {"name": "clean house"},
    {"name": "water plant"},
    {"name": "dishes"},
    {"name": "vaccum"},
    {"name": "dog walking"},
    {"name": "code"},
  ]
});
