import TaskCard from "./TaskCard";
import TaskCard_completed from "./TaskCard";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold space-x-4 p-4">Smarter Tasks</h1>
      <p className="space-x-4 p-4">Project: Graduation Final Year Project</p>

      <div className="flex space-x-4 p-4">
  <div className="w-1/2 border-2 border-purple-600 p-4 rounded-lg">
    <h1 className="text-xl font-bold">Pending</h1>
    <TaskCard title="Build a static website" dueDate="18th OCT" assignee="me" />
    <TaskCard title="Write a blog" dueDate="18th OCT" assignee="me" />
  </div>

  <div className="w-1/2 border-2 border-purple-600 p-4 rounded-lg">
    <h1 className="text-xl font-bold">Done</h1>
    <TaskCard_completed
      title="Design the mockup"
      dueDate="18th December"
      assignee="me"
    />
    <TaskCard_completed
      title="Get approval from principal"
      dueDate="18th December"
      assignee="me"
    />
  </div>
</div>

      
    </>
  );
}

export default App;
