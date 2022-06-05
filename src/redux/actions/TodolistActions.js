import { ADD_TASK, COMPLETED_TASK, DELETE_TASK, EDIT_TASK, GET_THEME, UPDATE_TASK } from "../types/todolistTypes"

export const getThemeValue = (payload) => {
    return ({
        type: GET_THEME,
        payload
    })
}
export const addTask = (payload) => {
    return ({
        type: ADD_TASK,
        payload
    })
}
export const completeTask = (payload) => {
    return ({
        type: COMPLETED_TASK,
        payload
    })
}
export const deleteTask = (payload) => {
    return ({
        type: DELETE_TASK,
        payload
    })
}
export const editTask = (id, payload) => {
    return ({
        type: EDIT_TASK,
        id,
        payload
    })
}
export const updateTask = (payload) => {
    return ({
        type: UPDATE_TASK,
        payload
    })
}