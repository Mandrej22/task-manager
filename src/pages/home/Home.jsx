import React from 'react';
import TaskColumn from './../../components/task-column/TaskColumn'
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';

function Home() {
  const tasks = JSON.parse(localStorage.tasks);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const tasksByStatus = status => {
    return tasks.filter(task => task.status === status && task.title.toLowerCase().includes(search.toLowerCase()));
  };


  return (
    <div className={styles['home']}>
      <input type="text" value={search} onChange={handleSearchChange} placeholder="Search tasks" />
      <div className={styles['tasks']}>
      <TaskColumn tasks={tasksByStatus('wishlist')} status="Wishlist" />
      <TaskColumn tasks={tasksByStatus('to do')} status="To Do" />
      <TaskColumn tasks={tasksByStatus('in progress')} status="In Progress" />
      <TaskColumn tasks={tasksByStatus('done')} status="Done" />
      </div>
    </div>
  );
}

export default Home;
