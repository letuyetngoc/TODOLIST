const stateDefault = {
    theme: [],
    listTask: []
}
const TodolistReducer = (state = stateDefault, action) => {
    switch (action.type) {
        default: return { ...state }
    }
}
export default TodolistReducer