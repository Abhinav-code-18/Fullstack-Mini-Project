import { useState } from "react";
import api from "../API";

export default function AddTaskForm() {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await api.post("/tasks", { title });
    setTitle("");
    window.dispatchEvent(new Event("tasks-updated"));
  };

  return (
    <form className="card p-3 mb-4 border border-info" onSubmit={addTask}>
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Enter a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2 d-block mx-auto">Add Task</button>
    </form>
  );
}
