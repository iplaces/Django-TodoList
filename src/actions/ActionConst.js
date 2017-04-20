/**
 * Created by iplace on 2017/4/20.
 */
import * as types from '../constants/ActionTypes';

export const addTodoConst = (text, id) => {
    return {
        type: types.ADD_TODO,
        id,
        text
    }
};

export const deleteTodoConst = (id) => {
    return {
        type: types.DELETE_TODO,
        id
    }
};

export const toggleTodoConst = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
};

export const toggleAllConst = () => {
    return {
        type: types.TOGGLE_ALL
    }
};

export const clearCompletedConst = () => {
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

export const getAllTodos = (todos) => {
    return {
        type: types.GET_ALL_TODOS,
        todos
    }
};