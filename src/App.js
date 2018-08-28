import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.stateC = { items:[],text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  render() {
      const todos = [{text: "Do COSW Lab", priority: 99999999999, dueDate: new Date(2018, 9, 30)},
          {text: "Learn React", priority: 5, dueDate: new Date()},
          {text: "Learn about APIs", priority: 4, dueDate: new Date(2018, 8, 30)},
          {text: "write TODO App", priority: 3, dueDate: new Date(2018, 9, 30)}];
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="TODO ReactApp">Hi, Welcome to your Todo List</h1>
              </header>
              <p className="App-intro">
              </p>
              <h1>Consult your personal list of assignements </h1>
              <h3>TODO</h3>
              <TodoList list={this.stateC} />
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="new-todo">
                      What needs to be done?
                  </label>
                  <input
                      id="new-todo"
                      onChange={this.handleChange}
                      value={this.stateC.text}
                  />
                  <button>
                      Add #{this.stateC.items.length + 1}
                  </button>
              </form>
          </div>
      );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.stateC.text.length) {
            return;
        }
        const newItem = {
            text: this.stateC.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

export default App;
