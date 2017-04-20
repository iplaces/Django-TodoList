import fetch from 'isomorphic-fetch';
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

export const getAllTodos = (todos) => {
    return {
        type: types.GET_ALL_TODOS,
        todos
    }
};


// 异步请求，从数据库中获取todo列表
export const fetchTodolist = () => {
    return (dispatch) => {
        return fetch(`/todolist`)
            .then(response => response.json())
            .then(json =>
                dispatch(getAllTodos(json))
            )
    }
};