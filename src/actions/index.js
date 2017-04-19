import * as types from '../constants/ActionTypes';

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        id
    }
};

export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
};

export const toggleAll = () => {
    return {
        type: types.TOGGLE_ALL
    }
};

export const clearCompleted = () => {
    return {
        type: types.CLEAR_COMPLETED
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
};