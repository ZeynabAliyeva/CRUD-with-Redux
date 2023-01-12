import { applyMiddleware, createStore } from 'redux';
import addTodoReducers from '../reducers/addTodoReducers'
import thunk from 'redux-thunk'
const store = createStore(addTodoReducers,applyMiddleware(thunk))

export default store;