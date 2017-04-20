import fetch from 'isomorphic-fetch';
import * as actionConst from './ActionConst';

export const setVisibilityFilter = actionConst.setVisibilityFilter;

// 异步请求，从数据库中获取todo列表
export const fetchTodolist = () => {
    return (dispatch) => {
        return fetch(`/todolist`)
        .then(response => response.json())
        .then(json =>
            dispatch(actionConst.getAllTodos(json))
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
            dispatch(actionConst.addTodoConst(text, json.id));
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
            dispatch(actionConst.deleteTodoConst(id));
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
            dispatch(actionConst.toggleTodoConst(id));
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
            dispatch(actionConst.toggleAllConst());
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
            dispatch(actionConst.clearCompletedConst());
        })
        .catch(e => {
            console.error(e);
        })
    }
};