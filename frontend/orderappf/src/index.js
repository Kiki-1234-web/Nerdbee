// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js'; // Assuming you have an App component in a file named App.js
// import './index.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom'; // Import createRoot
import App from './App.js';
import './index.css';

// Use createRoot to render your app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
