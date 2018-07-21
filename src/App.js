import React, { Component } from "react";

const Header = props => (
  <h1
    style={{
      fontWeight: 200,
      fontSize: "3rem",
      marginBottom: 30,
      textTransform: "uppercase"
    }}
  >
    {props.title}
  </h1>
);

const TodoInput = props => (
  <div style={{ marginRight: "50px" }}>
    <input
      value={props.value}
      className="todo-input"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  </div>
);

const Todo = props => (
  <div className="todo">
    {props.content}
  </div>
);

const TodoList = props => (
  <div className="todo-list">
    {props.todos.map(todo => (
      <Todo content={todo.content} key={props.todos.indexOf(todo)} />
    ))}
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
      todos: []
    };
  }

  onTodoInputChange = e => {
    this.setState({ todoInput: e.target.value });
  };

  onTodoInputKeypress = e => {
    if (e.which === 13) {
      this.setState(prevState => {
        return {
          todos: prevState.todos.concat([{content: prevState.todoInput, done: false}]),
          todoInput: ""
        };
      });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="App">
        <Header title="Todo App" />
        <TodoInput
          onKeyPress={this.onTodoInputKeypress}
          value={this.state.todoInput}
          placeholder="Enter Todo"
          onChange={this.onTodoInputChange}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
