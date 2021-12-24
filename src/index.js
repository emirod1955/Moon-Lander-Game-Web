import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// unable right click
/*window.addEventListener('contextmenu', function (e) { 
  e.preventDefault(); 
}, false);*/

//display App in html root id
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
