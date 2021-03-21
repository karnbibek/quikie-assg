import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Details from './components/Details';
import App from './App';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Details} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);