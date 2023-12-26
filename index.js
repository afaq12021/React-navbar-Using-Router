import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import App2 from './App2';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>,
  document.getElementById("root")
)

