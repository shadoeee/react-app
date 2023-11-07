import './components/App.css'
import React, { useState } from "react";
import AddToDo from './AddToDo';
import TodoTask from './TodoTask';

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Update a todo's status
  const updateTodo = (id, status) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>MyTodo App</h1>
      <AddToDo addTodo={addTodo} />
      <TodoTask
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
