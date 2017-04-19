import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos: undoable(todos, {filter: distinctState()}),
    visibilityFilter
});

export default todoApp;