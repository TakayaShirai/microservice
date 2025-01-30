import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM is the library that allows you to interact with DOM.
// Document Object Model(DOM) is the data representation of the objects that 
// comprise the structure and content of a document on the web.
// https://www.youtube.com/watch?v=NO5kUNxGIu0
ReactDOM.render(
    <App />, // component to render
    document.getElementById('root') // DOM node where you want to render. This assumes there is an HTML element with the ID of "root".
);