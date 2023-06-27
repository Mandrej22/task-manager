import React from 'react';
import Task from './../task/Task';
import styles from './TaskColumn.module.scss';

function TaskColumn({ tasks, status }) {
  return (
    <div className={`${styles['column']} ${styles[`column--${status.replace(" ", "-").toLowerCase()}`]}`}>
      <h1 className={styles['column-title']}>{status}</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskColumn;
