import fetch from 'isomorphic-fetch';
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

// 异步请求，向数据库中添加todo项
export const addTodo = (text) => {
    return (dispatch) => {
        return fetch('/todolist/', {
                method: "post",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            })
            .then(response => response.json())
            .then(json => {
                dispatch(addTodoConst(text, json.id));
            })
            .catch(e => {
                console.error(e)
            });
    }
};

// 异步请求，删除todo项
export const deleteTodo = (id) => {
    return (dispatch) => {
        return fetch('tododetail/' + id, {
                method: "DELETE"
            })
            .then(() => {
                dispatch(deleteTodoConst(id));
            })
            .catch(e => {
                console.error(e);
            });
    }
};

// 异步请求，改变todo状态
export const toggleTodo = (id) => {
    return (dispatch) => {
        return fetch('tododetail/' + id)
            .then(() => {
                dispatch(toggleTodoConst(id));
            })
            .catch(e => {
                console.error(e);
            })
    }
};

// 异步请求，改变所有todo的状态
export const toggleAll = () => {
    return (dispatch) => {
        return fetch('changeall/')
            .then(() => {
                dispatch(toggleAllConst());
            })
            .catch(e => {
                console.error(e);
            })
    }
};

// 异步请求，清除所有完成的todo
export const clearCompleted = () => {
    return (dispatch) => {
        return fetch('changeall/', {
                method: "DELETE"
            })
            .then(() => {
                dispatch(clearCompletedConst());
            })
            .catch(e => {
                console.error(e);
            })
    }
};