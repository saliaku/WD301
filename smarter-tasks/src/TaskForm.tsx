import React from "react";
type TaskFormProps = object
type TaskFormState = object
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Task added");
  }

  render(){
    return (
        <>
      <div>Task form</div>
      <form onSubmit={this.addTask}>
        <input type="text" />
        <button type="submit">Add item</button>
      </form>
      </>
      
    )
  }
}
 export default TaskForm;