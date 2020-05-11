import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import GlobalStyle from './config/styles/global-styles';

/* Client render (optional when SSR) */
if (typeof document !== 'undefined') {
  const application = document.getElementById('application');
  render( 
    <React.Fragment>
        <GlobalStyle/>
        <App />
    </React.Fragment>     

  ,application);
}
