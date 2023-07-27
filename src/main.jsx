import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Store
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const middlewares = [thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
) // สร้าง Redux store โดยใช้ cartReducer

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* ให้ Provider ครอบ App เพื่อเชื่อมต่อ React components กับ Redux store */}
      <App />
    </Provider>
  </React.StrictMode>,
);
