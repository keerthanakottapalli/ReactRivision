import React, { Component } from 'react';
import './ToDoListClass.css';    

class StateManagementRcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    if (this.state.newTask.trim()) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: '',
      }));
    }
  };

  render() {
    return (
      <div className="todo-container">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChange}
          className="todo-input"
        />
        <button onClick={this.addTask} className="todo-button">
          Add Task
        </button>
        <ul className="todo-list">
          {this.state.tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StateManagementRcc;
