import React from 'react';
import {Redirect} from 'react-router';
import {Switch, Route} from 'react-router-dom';

import {
  NotFound,
  Home,
  AlbumPage,
  LoginPage
} from './containers/pages';

const Routes = (props) => {

 return(
    <Switch>
      <Route path="/album/:track/:artist" exact render={() => <AlbumPage logged={props.logged}/>}/>
      <Route path="/ops" component={NotFound}/>
      <Route path="/" exact render={() => <Home logged={props.logged}/>}/>
      <Route path="/" exact render={() => <LoginPage logged={props.logged}/>}/>
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
  
}


export default Routes;

