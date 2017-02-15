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

-angularjs directives used: ng-show,ng-hide,ng-model,controller: explanation in commits while used.
 - ng-repeat: allows you to repeat html content for items in a js array or obj
  - i can actually see the ng-model directive updating the scope var in real time. This is a big time saver because you do not have to create and maintain the relationship between the html being edited and the data itself, which in the example case, its an array of objs.
  - new scopes for each elements in the array, this is because ng repeat creates a new scope for each element in the array and all of these scopes are children of the mainCtrl scope. Each have a todo var, they do not affect each other because they are in diff sibling scopes, in addition they inherent from the same parent scope and NOT the other way around. For this reason, the parent scope is not cluttered with variables that do not matter to the main controller.

-ng-blur and ng-class to improve UX:
 - ng-blur corresponds to js blur event: which is fired anytime an input loses focus. If i am typing/editing a task and click outside the element i was currently in, the blur event fires. Clicking outside of the input to stop editing.

 -ng-class uses angular expression to conditionaly apply css classes to html elements.
  - buttons should be aligned with middle of input when it in edit mode.

 -ng-change: we can watch an input for changes and eval an expression when the value changes.
