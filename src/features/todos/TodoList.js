// import React from 'react'
// import { useSelector } from 'react-redux'
// import TodoListItem from './TodoListItem'

// const selectTodos = state => state.todos

// const TodoList = () => {
//   //const todos = useSelector(selectTodos)
//   const todos = useSelector(state => state.todos)

//   // since `todos` is an array, we can loop over it
//   const renderedListItems = todos.map(todo => {
//     return <TodoListItem key={todo.id} todo={todo} />
//   })

//   return <ul className="todo-list">{renderedListItems}</ul>
// }

// export default TodoList


// // rework clean function
// import React from 'react'
// import { useSelector } from 'react-redux'
// import TodoListItem from './TodoListItem'

// const selectTodos = (state) => state.todos

// const TodoList = () => {
//   const todos = useSelector(selectTodos)

//   const renderedListItems = todos.map((todo) => {
//     return <TodoListItem key={todo.id} todo={todo} />
//   })

//   return <ul className="todo-list">{renderedListItems}</ul>
// }

// export default TodoList

// //new update
// import React from 'react'
// import { useSelector } from 'react-redux'
// import TodoListItem from './TodoListItem'

// const selectTodoIds = state => state.todos.map(todo => todo.id)

// const TodoList = () => {
//   const todoIds = useSelector(selectTodoIds)

//   const renderedListItems = todoIds.map(todoId => {
//     return <TodoListItem key={todoId} id={todoId} />
//   })

//   return <ul className="todo-list">{renderedListItems}</ul>
// }

//shallow equal
import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
