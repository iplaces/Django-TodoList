import React, { PropTypes } from 'react'
import classname from 'classname';

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
    <li className={classname({completed: completed})}>
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                onChange={onClick}
                checked={completed}
            />
            <label>{text}</label>
            <button className="destroy" onClick={onDeleteClick}></button>
        </div>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo