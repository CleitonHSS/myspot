import React from 'react';
import {Redirect} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {
  InternalServerError,
  NotFound,
  Home,
  AlbumPage
} from './containers/pages';

const Routes = () => (
  <Switch>
    <Route path="/erro" exact component={InternalServerError} />
    <Route path="/Album" exact component={AlbumPage}/>} />
    <Route path="/ops" component={NotFound}/>
    <Route path="/" exact component={Home}/>} />
    <Route path="*">
      <Redirect
        to={{
          pathname: '/ops',
          state: {
            referrer: window && window.location.href,
            message: '404'
          }
        }}
      />
    </Route>
  </Switch>
);

export default Routes;
