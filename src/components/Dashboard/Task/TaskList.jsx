/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// TaskList.js

import { useDrop } from 'react-dnd';
import Task from './Task';
const ItemTypes = {
  TASK: 'task',
};
const TaskList = ({ tasks, status, onTaskStatusChange , settaskID}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => onTaskStatusChange(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`rounded-lg   overflow-hidden ${tasks.length === 0 && "mb-10 "} `} style={{ border: isOver ? '2px dashed #000' : '2px dashed #00000000' }}>
      <h2 className='text-xl   text-center bg-red-300 capitalize text-white py-3'>{status}</h2>  
      {tasks.length > 0 ? tasks.map((task) => (
        <Task settaskID={settaskID} key={task._id} task={task} />
      ))
     :
     <p className='text-center py-5 bg-red-200'>No data Found</p>
    }
    </div>
  );
};

export default TaskList;
