import React, { Component } from 'react'
import store from './index'
import FilterLink from './FilterLink'
import getVisibleTodos from './getVisibleTodos'
let nextTodoId = 0;
class TodoApp extends Component {
  constructor(){
    super();
  }
  render() {
    const {todos, visibilityFilter}=this.props;
    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    )
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            });
          this.input.value = '';  //onClick之後, 將input清空
          }}>
          Add Todo
        </button>
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id}
                onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                });
              }}
              style={{
                textDecoration:
                  todo.completed ?
                    'line-through' :
                    'none'
              }} >
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show : {'    '}
          <FilterLink
            filter = 'SHOW_ALL'
            currentFilter={visibilityFilter}
            >
            All
          </FilterLink>
            {'    '}
          <FilterLink
            filter = 'SHOW_ACTIVATE'
            currentFilter={visibilityFilter}
            >
            Activate
          </FilterLink>
            {'    '}
          <FilterLink
            filter = 'SHOW_COMPLETED'
            currentFilter={visibilityFilter}
            >
            Completed
          </FilterLink>
        </p>
      </div>
    )
  };
}

export default TodoApp;
