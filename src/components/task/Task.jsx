import React from 'react';
import styles from './Task.module.scss';

function Task({ task }) {
  return (
    <div className={styles['task']}>
      <h2 className={styles['task-title']}>{task.title}</h2>
      <p className={styles['task-description']}>{task.description}</p>
    </div>
  );
}

export default Task;
