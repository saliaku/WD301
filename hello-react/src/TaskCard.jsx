import PropTypes from 'prop-types';
import './TaskCard.css';

const TaskCard = (props) => {
    console.log(props);
    return (
      <div className='TaskItem'>
        <h2 className='text-xl font-bold text-red-500'>{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assignee} </p>
      </div>
    );
}

const TaskCard_completed = (props) => {
  console.log(props);
  return (
    <div className='TaskItem'>
      <h2 className='text-xl font-bold text-red-500'>{props.title}</h2>
      <p>Completed on: {props.dueDate}</p>
      <p>Assignee: {props.assignee} </p>
    </div>
  );
}

TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    assignee: PropTypes.string,
};

TaskCard_completed.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  assignee: PropTypes.string,
};

export default TaskCard && TaskCard_completed;