import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render } from 'react-dom'

import { Router, Route, browserHistory } from 'react-router'
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Page3 from './Page/Page3';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="page1" component={Page1}/>
      <Route path="page2" component={Page2}/>
      <Route path="page3" component={Page3}/>
      <Route path="*" component={Page1}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
