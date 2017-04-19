import { connect } from 'react-redux';
import { toggleTodo, toggleAll, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';
import * as filters from '../constants/TodoFilter';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case filters.SHOW_ALL:
            return todos;
        case filters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case filters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
    }
};
const allCompleted = (todos) => {
    const completedCount = todos.reduce((count, todo) => todo.completed? count+1: count, 0);
    return completedCount === todos.length;
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos.present, state.visibilityFilter),
        allCompleted: allCompleted(state.todos.present)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onToggleClick: () => {
            dispatch(toggleAll());
        },
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;