angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
  $scope.helloConsole = dataService.helloConsole;
  $scope.learningNgChange = function(){
    console.log("an input has been changed");
  };
  $scope.helloWorld = dataService.helloWorld;
  $scope.todos = dataService.getTodos();
  //creating fake todos array for testing purposes

})
.service('dataService', function($http){//get request using http provider, in the services arguments
  this.helloConsole = function(){
    console.log('this is hello console service!');
  };
  this.getTodos = $http.get('mock/todos.json')//path on server, then method to request, execute code after res is received from sercer
   .then(function(response){ //annom function callback with a paremeter of reponse received from server
     return response.data;//todos
   })
});


//method chaining, chain methods 1 after the other
//define new service with service methods
//1st parameter is the name of the service
//2nd parameter is an annom callback function where we store our services methods
//we will be using this keyword
//this is special in js, context specific keyword that refers to specific things based on how its used
//this refers to the service itself, when i attach the method helloConsole, it will be availbale of a method
//console log.

//http provider, dependency injection at work again!
