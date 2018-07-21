import React, { Component } from "react";

const Header = props => {
  return <h1 style={{
    fontWeight: 200,
    fontSize: '3rem',
    marginBottom: 30
  }}>{props.title}</h1>;
};

const TodoInput = props => {
  return (
    <input
    className
    type="text"
    value={props.value}
    placeholder={props.placeholder}
    />
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Todo App" />
        <TodoInput value="" placeholder="Enter Todo" />
      </div>
    );
  }
}

export default App;
