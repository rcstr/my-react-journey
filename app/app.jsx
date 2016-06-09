"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('./components/Greeter');

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);