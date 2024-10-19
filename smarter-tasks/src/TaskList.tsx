import React from "react";
import Task from "./Task";

type Props = object;

interface TaskItem {
  title: string;
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      tasks: [
        { title: "Wash Car" },
        { title: "Clean Room" },
        { title: "Do Homework" },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.tasks.map((task) => (
          <Task title={task.title} />
        ))}
      </>
    );
  }
}

export default TaskList;
