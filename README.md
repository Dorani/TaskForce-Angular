# TaskForce-Angular
todo list application using angularjs

## Chrome Tools:

-AngularJS Batarang:
 - Extends the Developer Tools, adding tools for debugging and profiling AngularJS applications.
-ng-inspector for AngularJS:
 -browser extension that displays an inspector panel showing the AngularJS scope hierarchy in the current page in real time, as well as which controllers or directives are associated with which scope.
  - in order to use ng-inspector:
  - in the command line tool: npm install -g http-server
   -and when it's installed you just navigate into the folder you want to create  a server for and type
  - in the commmand line tool: http-server -o
   -inspect away!

##Angular directives used:

-ng-show,ng-hide,ng-model,controller: explanation in commits while used.
 - ng-repeat: allows you to repeat html content for items in a js array or obj
  - i can actually see the ng-model directive updating the scope var in real time. This is a big time saver because you do not have to create and maintain the relationship between the html being edited and the data itself, which in the example case, its an array of objs.
  - new scopes for each elements in the array, this is because ng repeat creates a new scope for each element in the array and all of these scopes are children of the mainCtrl scope. Each have a todo var, they do not affect each other because they are in diff sibling scopes, in addition they inherent from the same parent scope and NOT the other way around. For this reason, the parent scope is not cluttered with variables that do not matter to the main controller.

-ng-blur and ng-class to improve UX:
 - ng-blur corresponds to js blur event: which is fired anytime an input loses focus. If i am typing/editing a task and click outside the element i was currently in, the blur event fires. Clicking outside of the input to stop editing.

 -ng-class uses angular expression to conditionaly apply css classes to html elements.
  - buttons should be aligned with middle of input when it in edit mode.

 -ng-change: we can watch an input for changes and eval an expression when the value changes.

##Services:
 - Used across application through dependency injection:
  - that is how angular makes code available to multiple parts of application
   - which mean that multiple controllers can use the same service, as long as they define the service as a dependency.
   -Services could be used for a wide array of things:
    -providing REST API access methods to diff pieces of app, to sharing data of the longed in user across the app.

###Setting up a service:
 - directly in app.js after mainCtrl, check it out!
 - the way we use this service is by 1st off defining it as a dependency in the controller
 - to do this we provide the name of the service directly as a parameter in the controller callback function
 - now we can access the services methods as you would any other obj in js.

###services to get data
 - make a request from a server then wire it to UI.
 - request fake data
 - move todos to own file
 - create a new folder call it mock
  - good convention to use anytime you have a place that stores data that mocks a server:
   - test it out: file:///Users/Seif/dev/taskforce/TaskForce-Angular/mock/todos.json
    - you should see your obj.

###Service, save and delete
 - create 2 methods, deletetodo and savetodo.
 - then we are using index in the html, which is the pos of the current todo in the todos array, ng repeat gives us access to a special var thats available within each element within the ng-repeats local scope, so in each todo, there is a local variable called index, and we can pass that to the delete todo function
 - jump into the controller, we can use this, right within the function making it the second parameter
  - use splice method on todos array, and delete just 1.
  - convention in the view when you are passing it remember to add$

###Organizing the application
 - directory structure and files need to be well organized, ie: scaffolding.
 - store all controllers in 1 directory, directives and services in another.
