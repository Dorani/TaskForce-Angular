angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService){
  $scope.learningNgChange = function(){
    console.log("An input changed!");
  };

  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });

})

.service('dataService', function($http){
  this.helloWorld = function() {
    console.log("This is the data service's method!!");
  };
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback);
  };
  this.deleteTodos = function(todo){
    console.log('the' + todo.name + 'todo has been deleted')
  };
  this.saveTodos = function(todo){
    console.log('the' + todo.name + 'todo has been saved');
  };
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
