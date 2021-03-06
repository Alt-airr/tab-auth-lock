import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state} dispatch={store.dispatch.bind(store)} store={store}
    />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

