angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log("this is the helloWorld controller function in the mainCtrl, it is now working.");
  };
});
