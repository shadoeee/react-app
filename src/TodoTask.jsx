import React from "react";

function TodoTask({ todos, updateTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <h2>{todo.taskName}</h2>
          <p>{todo.description}</p>
          <button
            className="edit-button"
            onClick={() => updateTodo(todo.id, "completed")}
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
          <select
            className="status-select"
            value={todo.status}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
          >
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default TodoTask;
