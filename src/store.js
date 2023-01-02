// import { createStore } from 'redux'
// import { legacy_createStore as createStore} from 'redux'
// import rootReducer from './reducer'
// import { sayHiOnDispatch } from './exampleAddons/enhancers'

// const store = createStore(rootReducer, undefined, sayHiOnDispatch)

// Example Addons
// 
// Example Middleware

// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducer'
// import { print1, print2, print3 } from './exampleAddons/middleware'

// const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// // Pass enhancer as the second arg, since there's no preloadedState
// const store = createStore(rootReducer, middlewareEnhancer)

//Example DevTools

// import {legacy_createStore as createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'
// import { print1, print2, print3 } from './exampleAddons/middleware'

// const composedEnhancer = composeWithDevTools(
//   // EXAMPLE: Add whatever middleware you actually want to use here
//   applyMiddleware(print1, print2, print3)
//   // other store enhancers if any
// )

// const store = createStore(rootReducer, composedEnhancer)

// export default store

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
///.     todos: JSON.parse(persistedTodosString)
//   }
// }

// const store = createStore(rootReducer, preloadedState)

//Thunk Middleware
// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// // The store now has the ability to accept thunk functions in `dispatch`
// const store = createStore(rootReducer, composedEnhancer)
// export default store


// That one call to configureStore did all the work for us:

// It combined todosReducer and filtersReducer into the root reducer function, which will handle a root state that looks like {todos, filters}
// It created a Redux store using that root reducer
// It automatically added the thunk middleware
// It automatically added more middleware to check for common mistakes like accidentally mutating the state
// It automatically set up the Redux DevTools Extension connection

import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
  }
})

export default store