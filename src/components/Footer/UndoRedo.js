import React from 'react';

const UndoRedoComp = ({canUndo, canRedo, onUndo, onRedo}) => {
    const undoRedoStyle = (canDo) => {
        if (!canDo) {
            return {
                borderColor: '#fff',
                color: '#c3c3c3'
            }
        } else {
            return {
                cursor: 'pointer'
            }
        }
    };

    return (
        <li>
            <a
                onClick={onUndo}
                style={undoRedoStyle(canUndo)}
            >
                Undo
            </a>
            <a
                onClick={onRedo}
                style={undoRedoStyle(canRedo)}
            >
                Redo
            </a>
        </li>
    )
};

export default UndoRedoComp;
