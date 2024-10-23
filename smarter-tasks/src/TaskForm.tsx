import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {

  addTask: (task: TaskItem) => void;

  addDue: (task: TaskItem) => void;

  addDes: (task: TaskItem) => void;

}


interface TaskFormState {
  title: string;
  description: string;
  due: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      due: "",
    };
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({description: event.target.value});
  };

  dueChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({due: event.target.value});
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.due,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.setState({ due: "" });
  };

  render() {
    return (
      <>
        <div style={{ fontSize: '24px', marginBottom: '20px' }}>Task Form</div>
      <form onSubmit={this.addTask} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label style={{ marginBottom: '10px' }}>
          Title:
          <input type="text" value={this.state.title} onChange={this.titleChanged} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>
        
        <label style={{ marginBottom: '10px' }}>
          Description:
          <input type="text" value={this.state.description} onChange={this.descriptionChanged} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>
        
        <label style={{ marginBottom: '10px' }}>
          Due Date:
          <input type="text" value={this.state.due} onChange={this.dueChanged} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>
        
        <button type="submit" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      </>
    );
  }
}
export default TaskForm;
