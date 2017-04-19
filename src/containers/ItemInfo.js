import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { clearCompleted } from '../actions';

const activeCount = (todos) => {
    return todos.reduce((count, todo) => todo.completed? count: count + 1, 0);
};
const completedCount = (todos) => {
    return todos.reduce((count, todo) => todo.completed? count + 1: count, 0);
};

const mapStateToProp = (state) => {
    return {
        activeCount: activeCount(state.todos.present),
        completedCount: completedCount(state.todos.present)
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        clearCompleted: () => {
            dispatch(clearCompleted())
        }
    }
}

const FooterInfo = connect(
    mapStateToProp,
    mapDispatchToProp
)(Footer);

export default FooterInfo;