import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import { Default } from './config/themes/Default';
import configureStore from './configureStore';
import history from './history'

const store = configureStore({});

const App = () => (

  <Provider store={store}>
      <Router basename="/myspot" history={history}>
      <ThemeProvider theme={Default}>
        <Fragment>
            <Routes />
        </Fragment>
      </ThemeProvider>
      </Router>
  </Provider>
);

export default App;
