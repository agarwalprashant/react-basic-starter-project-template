console.log("App.js is running");

// JSX -JavaScript XML
// this is provided to us by react
// so react gives us this brand new way to define our templates and to inject our data into those templates
// these language extensions allows us to extend a language like scss and less which gives css a way to define a variable support 
// so that is what JSX is exactly a language extension

// this is a template this is a completely static template meaning there is no dynamic value injected inside of the template
// we want to render this template variable inside of the dom using React.we will do this using ReactDOM
// in the below statement <p>This is JSX from app.js ! </p> is a JSX expression and browser doesn't know what to do with this JSX expression becoz this is not a part of the javascript language
// so what we have to do is taking our code with JSX and compiling it down to boring old javascript
//if you have used any of the scss or less code at the end of the day you are compiling it down to CSS which is what browser actullay understands
// this is what we are going to do we are going to write code in JSX and compile it to regular old javascript using a tool called BABELJS
// the most cool feature of babel is taking code from ES6 ES7 and compiling it down to ES5 which all of the browsers understands
// after running the code from babel code looks like this
// "use strict";

// console.log("app is running");

// var template = React.createElement(
//   "p",
//   null, // attributes object
//   "This is JSX from app.js"
// );
var template = <h1>Indecision App</h1>;

var appRoot  = document.getElementById('app');

ReactDOM.render(template,appRoot);


