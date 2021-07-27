import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename="/MyBakingRecipeVol2">
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
