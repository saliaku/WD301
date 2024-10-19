import React from "react";

interface TaskProps {
  title: string;
}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div>
        <h1 className="mx-auto-w-64">{this.props.title}</h1>
      </div>
    );
  }
}

export default Task;
