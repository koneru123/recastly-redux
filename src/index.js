import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
import handleVideoSearch from './actions/search.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.
//const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleVideoSearch('redux tutorials')(store.dispatch)
);
