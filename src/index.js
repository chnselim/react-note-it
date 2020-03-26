import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './stores/reducers';
import storageMiddleware from './stores/middlewares/storageMiddleware';

const store = createStore(rootReducer, applyMiddleware(storageMiddleware('note', 'notes')));

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
