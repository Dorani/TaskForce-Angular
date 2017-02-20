angular.module('todoListApp')
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html'
    controller: 'mainCtrl' //ability we have the ability to define controller inside directive
  }
})
