import { LightTheme } from "../../Themes/LightTheme"
import { arrTheme } from "../../Themes/ManageTheme"
import { ADD_TASK, COMPLETED_TASK, DELETE_TASK, EDIT_TASK, GET_THEME, UPDATE_TASK } from "../types/todolistTypes"

const stateDefault = {
    toDoTheme: LightTheme,
    listTask: [{ id: 1, taskName: 'Task 1', done: false }, { id: 2, taskName: 'Task 2', done: false }, { id: 3, taskName: 'Task 3', done: true }, { id: 4, taskName: 'Task 4', done: true }],
    taskEdit: {}
}
const TodolistReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_THEME: {
            const newTheme = arrTheme.find(theme => theme.id == action.payload)
            return { ...state, toDoTheme: newTheme.theme }
        }
        case ADD_TASK: {
            return { ...state, listTask: [...state.listTask, action.payload] }
        }
        case COMPLETED_TASK: {
            let newListTask = [...state.listTask]
            let index = newListTask.findIndex(task => task.id === action.payload)
            if (index !== -1) {
                newListTask[index].done = true
            }
            return { ...state, listTask: newListTask }
        }
        case DELETE_TASK: {
            let newListTask = [...state.listTask]
            let index = newListTask.findIndex(task => task.id === action.payload)
            newListTask.splice(index, 1)
            return { ...state, listTask: newListTask }
        }
        case EDIT_TASK: {
            let index = state.listTask.findIndex(task => task.id === action.id)
            if (index !== -1) {
                state.taskEdit = { id: action.id, taskName: action.payload, done: false }
            }
            return { ...state }
        }
        case UPDATE_TASK: {

            state.taskEdit = { ...state.taskEdit, taskName: action.payload }
            let listTaskUpdate = [...state.listTask]

            let index = listTaskUpdate.findIndex(task => task.id === state.taskEdit.id)
            if (index !== -1) {
                listTaskUpdate[index] = state.taskEdit
            }
            state.listTask = listTaskUpdate
            state.taskEdit = { id: -1, taskName: '', done: false }
            return { ...state }
        }
        default: return { ...state }
    }
}
export default TodolistReducer