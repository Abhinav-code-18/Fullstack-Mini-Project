import api from "../API";

export default function TaskItem({ task, refresh }) {
  const toggle = async () => {
    await api.put(`/tasks/${task.id}`);
    refresh();
  };

  const remove = async () => {
    await api.delete(`/tasks/${task.id}`);
    refresh();
  };

  return (
    <div className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={toggle}
        />
        <span className={task.completed ? "text-decoration-line-through" : ""}>
          {task.title}
        </span>
      </div>

      <button className="btn btn-sm btn-danger" onClick={remove}>
        Delete
      </button>
    </div>
  );
}
