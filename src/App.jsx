import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import { Default } from './config/themes/Default';
import configureStore from './configureStore';
import history from './history'
import hash from '../private/hash'

const store = configureStore({});

const App = () =>{

  const token = hash;

  return (
  <Provider store={store}>
      <Router basename="/myspot" history={history}>
      <ThemeProvider theme={Default}>
        <Fragment>
            <Routes logged={token}/>
        </Fragment>
      </ThemeProvider>
      </Router>
  </Provider>
)};

export default App;
