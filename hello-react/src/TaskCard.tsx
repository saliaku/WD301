import React from 'react';
import './TaskCard.css';

// Define an interface for the props
interface TaskCardProps {
  title: string;
  dueDate?: string; // Optional if you want to allow it to be undefined
  assignee?: string; // Optional
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, assignee }) => {
  return (
    <div className='TaskItem'>
      <h2 className='text-xl font-bold text-red-500'>{title}</h2>
      <p>Due on: {dueDate}</p>
      <p>Assignee: {assignee}</p>
    </div>
  );
}

const TaskCard_completed: React.FC<TaskCardProps> = ({ title, dueDate, assignee }) => {
  return (
    <div className='TaskItem'>
      <h2 className='text-xl font-bold text-red-500'>{title}</h2>
      <p>Completed on: {dueDate}</p>
      <p>Assignee: {assignee}</p>
    </div>
  );
}

// Export both components
export { TaskCard, TaskCard_completed };
