import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TrainsIndex from './components/trains_index';
import TrainsShow from './components/trains_show';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={TrainsIndex} />
    <Route path="/:name" component={TrainsShow} />
  </Route>
);
