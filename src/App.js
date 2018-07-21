import React, { Component } from "react";

const Header = props => (
  <div style={{ marginBottom: 30 }}>
    <h1
      style={{
        fontWeight: 200,
        fontSize: "3rem",
        textTransform: "uppercase"
      }}
    >
      {props.title}
    </h1>
    <p>{props.message}</p>
  </div>
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
  <div className="todo" onClick={props.onTodoDelete}>
    <span>{props.todo}</span>
  </div>
);

const TodoList = props => (
  <div className="todo-list">
    {props.todos.map(todo => {
      const key = props.todos.indexOf(todo);
      return (
        <Todo
          todo={todo}
          key={key}
          onTodoDelete={() => props.onTodoDelete(key)}
        />
      );
    })}
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
      if (this.state.todoInput === "") return;
      this.setState(prevState => {
        return {
          todos: prevState.todos.concat([prevState.todoInput]),
          todoInput: ""
        };
      });
    }
  };

  onTodoDelete = key => {
    let { todos } = this.state;
    todos.splice(key, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <Header title="Todo App" message="Enter to add, click to delete" />
        <TodoInput
          onKeyPress={this.onTodoInputKeypress}
          value={this.state.todoInput}
          placeholder="Enter Todo"
          onChange={this.onTodoInputChange}
        />
        <TodoList todos={this.state.todos} onTodoDelete={this.onTodoDelete} />
      </div>
    );
  }
}

export default App;
