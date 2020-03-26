import React from "react";
import "./styles.css";
import { render } from "react-dom";
const rootElement = document.getElementById("root");

let id = 0; // id for each list item

const Todo = (
  props // what a list should contain // default value of checked status of the list element is false
) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onClick={props.onDelete}> delete </button>
    <span>{props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [] // the todo list
    };
  }

  addTodo() {
    const text = prompt("TODO text please");
    this.setState({
      // for updating our state we use this.setstate
      todos: [...this.state.todos, { id: id++, checked: false, text: text }] //used the id parameter to uniquely identify each item of the list
      // used the checked parameter to keep track of whether element is checked or not
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo =>  {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id) // to remove the todo which we want to delete
    });
  }

  render() {
    // here goes the html declartive
    //we iterate the whole todo list and for each todo we create a react component
    // the upper case Todo is a react component
    return (
      <div>
        <div>
          <h2>My ToDo App</h2>
        </div>
        <div>TODO COUNT: {this.state.todos.length} </div>
        <div>
          {" "}
          UNCHECKED TODO COUNT:{" "}
          {this.state.todos.filter(todo => !todo.checked).length}{" "}
        </div>
        <button onClick={this.addTodo.bind(this)}>NEW TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)} //passed as a prop for list item
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, rootElement);
