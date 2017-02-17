angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function(){
    var todo = {name: "this is a new todo"};

    $scope.todos.push(todo);
    console.log("adding works!");
  };

  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response) {
  console.log(response.data);
  $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo,index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };
})
.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("This is the data sercies's method!!");
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!");
    // other logic
  };


  this.saveTodo = function(todo) {
    console.log("The " + todo.name + " todo has been saved!");
    // other logic
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

//create use of services method we created a function in the scope.



//create a new function call addTodo
//make it equal to annom callback
//body of function create new todo to a obj with a single key, name key
//all i have to do to update the ui is push this object into the scope.todos array and this is because scope.todos is rendered using
//ng-repeat directive the ui will be refreshed when underlying data is update
//now wire it to the view
