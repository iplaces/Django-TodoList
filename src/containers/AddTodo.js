import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleSubmit = (e) => {
        const text = e.target.value.trim();
        if (e.keyCode === 13) {
            if (text !== '') {
                this.props.dispatch(addTodo(text));
            }
            this.setState({text: ''});
        }
    };
    handleChange = (e) => {
        this.setState({text: e.target.value})
    };

    render() {
        return (
            <input
                className="new-todo"
                type="text"
                autoFocus="true"
                placeholder="What needs to be done?"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
