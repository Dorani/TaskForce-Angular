angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
  $scope.helloConsole = dataService.helloConsole;
  $scope.learningNgChange = function(){
    console.log("an input has been changed");
  };
  //creating fake todos array for testing purposes

})
.service('dataService', function(){
  this.helloConsole = function(){
    console.log('this is hello console service!');
  }
  this.getTodos =
});


//method chaining, chain methods 1 after the other
//define new service with service methods
//1st parameter is the name of the service
//2nd parameter is an annom callback function where we store our services methods
//we will be using this keyword
//this is special in js, context specific keyword that refers to specific things based on how its used
//this refers to the service itself, when i attach the method helloConsole, it will be availbale of a method
//console log.
