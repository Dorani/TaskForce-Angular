angular.module("todoListApp", [])


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
