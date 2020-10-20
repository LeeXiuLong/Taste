import React from 'react';
import * as keys from './config/keys';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken && localStorage.jwtToken !== "undefined") {

    setAuthToken(localStorage.jwtToken);
    
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');

  window.getState = store.getState;

  // // Create the script tag, set the appropriate attributes


  let script = document.createElement('script');
  script.src =`https://maps.googleapis.com/maps/api/js?key=${keys.googleApiKey}&libraries=places&callback=myCallbackFunc`;


  // script.defer = true;

  // // Attach your callback function to the `window` object
  // window.myCallbackFunc = function () {
  //   // JS API is loaded and available
  // };

  // // Append the 'script' element to 'head'
  // document.head.appendChild(script);

  

  document.head.appendChild(script);
  ReactDOM.render(<Root store={store} />, root);
});

 // Create the script tag, set the appropriate attributes

  // script.defer = true;

  // // Attach your callback function to the `window` object
  // window.myCallbackFunc = function () {
  //   // JS API is loaded and available
  // };

  // Append the 'script' element to 'head'
