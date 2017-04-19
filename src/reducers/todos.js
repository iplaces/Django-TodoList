import * as types from '../constants/ActionTypes';

const todo = (state, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case types.TOGGLE_TODO: {
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
        }
        case types.TOGGLE_ALL: {
            return Object.assign({}, state, {
                completed: !state.completed
            })
        }
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case types.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case types.TOGGLE_TODO:
            return state.map((t) =>
                todo(t, action)
            );
        case types.TOGGLE_ALL:
            return state.map((t) =>
                todo(t, action)
            );
        case types.CLEAR_COMPLETED:
            return state.filter((todo) => todo.completed === false);
        default:
            return state;
    }
};

export default todos;