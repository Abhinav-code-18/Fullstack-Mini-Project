import { useEffect, useState } from "react";
import api from "../API";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    load();
    window.addEventListener("tasks-updated", load);
  }, []);

  return (
    <div className="card p-3 mb-4 border border-info">
      <h4 className="fw-bold text-center mb-3">Tasks</h4>
      <hr />

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} refresh={load} />
        ))
      )}
    </div>
  );
}
