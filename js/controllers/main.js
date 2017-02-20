'use strict';//strict mode by interpreter

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function(){
    var todo = {name: "this is a new todo"};

    $scope.todos.unshift(todo);
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
