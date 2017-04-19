import React from 'react';
import FilterLink from '../../containers/FilterLink';
import UndoRedo from '../../containers/UndoRedo';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilter';

const FILTER_TITLES = {
    [SHOW_ALL]: 'ALL',
    [SHOW_COMPLETED]: 'Completed',
    [SHOW_ACTIVE]: 'Active'
};

const Footer = ({activeCount, completedCount, clearCompleted}) => {
    const itemWord = activeCount === 1? 'item': 'items';
    const clearCompletedButton = (completedCount) => {
        if (completedCount > 0) {
            return (
                <button
                    className="clear-completed"
                    onClick={clearCompleted}
                >
                    Clear Completed
                </button>
            )
        }
    };

    return (
        <footer className="footer">
            {
                <span className="todo-count">
                    <strong>{activeCount || 'No'}</strong> {itemWord} left
                </span>
            }
            <ul className="filters">
                <FilterLink filter="SHOW_ALL">ALL</FilterLink>
                <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                {' '}
                <UndoRedo/>
            </ul>
            {clearCompletedButton(completedCount)}
        </footer>
    );
};

export default Footer;