import { combineReducers } from 'redux'
import TodolistReducer from './reducer/TodolistReducer'

export const RootReducer = combineReducers({
    TodolistReducer,
})
