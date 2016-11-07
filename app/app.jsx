var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>React Boiler Plate 3</p>,
//   document.getElementById('app')
// );

// require("./redux-examples.jsx");
require("./redux-todo-example.jsx");
