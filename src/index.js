/**
 * Created by iplace on 2017/4/19.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import App from './components/App';
import todoApp from './reducers';
import '../static/css/index.css';
import { fetchTodolist } from './actions';

const store = createStore(todoApp, applyMiddleware(thunkMiddleware));
store.dispatch(fetchTodolist());

const rootElement = document.getElementById('container');
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
