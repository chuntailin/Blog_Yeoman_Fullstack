import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

import App from 'components/app.js';
import HomePage from 'components/HomePage/HomePage.js';
import NewArticle from 'components/NewArticle/NewArticle.js';
import Editor from 'components/Editor/Editor.js';


render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
     	<Route path="homepage" component={HomePage}>
     	  <Route name="newarticle" path="newarticle" component={NewArticle} />
     	  <Route path="editor" component={Editor}/>
      </Route>
   </Route>

  </Router>
), document.getElementById('app'));


