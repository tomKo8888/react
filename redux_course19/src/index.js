//這個範例主要是以 import { combineReducers, createStore } from 'redux' 來建立相關
//的 store 與 listener
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import TodoApp from './TodoApp'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

// See Section 8 for earlier `render()` example
const render = () => {
  ReactDOM.render(
    // Render the TodoApp Component to the <div> with id 'root'
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')

  )
};

store.subscribe(render);
render();

registerServiceWorker();

export default store;
