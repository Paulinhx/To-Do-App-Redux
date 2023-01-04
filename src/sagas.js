import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import { call, put, takeEvery } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  preloadedState: { /* initial state */ }
});

sagaMiddleware.run(rootSaga);


export function* fetchTodos() {
  try {
    const response = yield call(api.fetchTodos);
    yield put({ type: 'FETCH_TODOS_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'FETCH_TODOS_FAILURE', error });
  }
}