angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.learningNgChange = function(){
    console.log("an input has been changed");
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
