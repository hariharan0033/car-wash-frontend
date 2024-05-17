// frontend/src/components/Task.js
import React from 'react';
import './Task.css';

const Task = ({ name }) => {
  return <div className="task">{name}</div>;
};

export default Task;
