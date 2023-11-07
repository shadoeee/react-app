import React, { useState } from "react";

function AddToDo({ addTodo }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (taskName) {
      const newTodo = {
        id: Date.now(),
        taskName,
        description,
        status: "not-completed",
      };
      addTodo(newTodo);
      setTaskName("");
      setDescription("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
}

export default AddToDo;
