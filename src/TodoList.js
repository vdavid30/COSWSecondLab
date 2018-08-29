import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const todos = this.props.list;
        const todoList = todos.items.map((todo) =>
           <Todo text={todo.text} priority="1212121" dueDate="1/1/1"/>
        );
        return (<ul>{todos.text}</ul>);

    }
}
