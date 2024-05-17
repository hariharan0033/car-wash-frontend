// frontend/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task._id} name={task.name} />
      ))}
    </div>
  );
};

export default TaskList;
