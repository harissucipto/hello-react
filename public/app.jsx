var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');


var firstName = 'Haris';

ReactDOM.render(
  <Greeter name={firstName} />, // passing data to props and render
  document.getElementById('app') // location to render
);
