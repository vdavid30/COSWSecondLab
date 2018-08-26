import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const todoList = this.props.list.map((todo) =>
            <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
        );
        return (<ul>{todoList}</ul>);

    }
}
