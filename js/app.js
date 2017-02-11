angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log("this is the hello world controller function");
  };
});//creating main controller, we will use just 1
