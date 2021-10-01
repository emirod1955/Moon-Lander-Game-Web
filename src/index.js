import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.oncontextmenu = function(){return false}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);