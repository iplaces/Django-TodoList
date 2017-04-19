import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import UndoRedoComp from '../components/Footer/UndoRedo';

const mapStateToProps = (state) => {
    return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUndo: () => dispatch(ActionCreators.undo()),
        onRedo: () => dispatch(ActionCreators.redo())
    }
}

const UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedoComp)

export default UndoRedo
