import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const todo = this.props.list;
        const todoList = todo.map((todo) =>
            <Todo text={todo.text} priority="1212121" dueDate="1/1/1"/>
        );
        return (<ul>{todoList}</ul>);

    }
}
