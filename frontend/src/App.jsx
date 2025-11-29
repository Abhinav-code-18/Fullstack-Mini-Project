import TaskList from "./components/TaskList";
import TaskAdd from "./components/TaskAdd";
import Suggestions from "./components/Suggestions";

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">AI-Assisted Task Manager</h1>

      <TaskAdd />
      <TaskList />
      <Suggestions />
    </div>
  );
}
