import React, {Component} from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (<h2>
            <i>Description:   </i> {this.props.text.toString()} <p/> <i>Level of Priority:   </i> {this.props.priority.toString()} <p/> <i>Due Date: </i> {this.props.dueDate.toString()} <p/> <p/>
            </h2>);
    }

}
