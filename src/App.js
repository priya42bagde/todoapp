import React, { Component } from "react";
import "./App.css"

export default class TodoListClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextTodoId: 0,
      newTodoLabel: "",
      todos: []
    };
  }

  removeTodo = (id) =>
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  addNewTodo = () =>
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.nextTodoId,
          label: this.state.newTodoLabel,
          done: false
        }
      ],
      nextTodoId: this.state.nextTodoId + 1,
      newTodoLabel: ""
    });
  render() {
    const { todos, newTodoLabel } = this.state;
    return todos ? (
      <div className="App">
        <h3>TODO Application</h3>
            <hr/>
        <div className="new-todo">
        <label htmlFor="new-todo">Please add tasks : </label>
          <input type="text"
            value={newTodoLabel}
            onChange={({ target }) =>
              this.setState({ newTodoLabel: target.value })
            }/>
          <button onClick={this.addNewTodo}>Add</button>
        </div>
        <div className="items">
        <h3 style={{textAlign:"start"}}>List of tasks </h3>
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span  className={todo.done ? "done" : ""}>{todo.label}</span>
              <button onClick={() => this.removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ol>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}
