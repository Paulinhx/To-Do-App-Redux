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

import {legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(print1, print2, print3)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)

export default store

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
///.     todos: JSON.parse(persistedTodosString)
//   }
// }

// const store = createStore(rootReducer, preloadedState)

