import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick, onDeleteClick, onToggleClick, allCompleted}) => (
    <section className="main">
        <input
            type="checkbox"
            className="toggle-all"
            onChange={() => onToggleClick()}
            checked={allCompleted}
        />
        <ul className="todo-list">
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                    onDeleteClick={() => onDeleteClick(todo.id)}
                />
            )}
        </ul>
    </section>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default TodoList;