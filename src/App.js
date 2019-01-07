import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./sample-data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  handleChange = id => {
    this.setState(prevState => {
      const newState = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return newState;
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} value={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todoList">
        <h1>
          Todo List | <small>random medical data</small>
        </h1>
        {todoItems}
      </div>
    );
  }
}

export default App;
