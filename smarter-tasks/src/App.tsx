import "./App.css";
import TaskForm from "./TaskForm";
// import Task from './Task'
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList tasks={[]}/>    </div>
  );
}

export default App;
