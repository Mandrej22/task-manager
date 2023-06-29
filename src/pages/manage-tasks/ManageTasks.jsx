import React, { useState, useEffect } from 'react';
import styles from './ManageTasks.module.scss';

function ManageTasks() {
  // Manage state for tasks, new tasks, edit mode, and task filter
  const [tasks, setTasks] = useState(JSON.parse(localStorage.tasks || "[]")); // Ne znam je li ovo najbolji nacin da storujem taskove, vjerovatno postoje neke biblioteke za ovo?
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'to do' });
  const [editMode, setEditMode] = useState(false);
  const [filter, setFilter] = useState('all');
  const [displayedTasks, setDisplayedTasks] = useState([]);

   // Handle input changes for new tasks
  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Add, delete, edit and update tasks
  const addTask = () => {
    const updatedTasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
    setTasks(updatedTasks);
    localStorage.tasks = JSON.stringify(updatedTasks);
    setNewTask({ title: '', description: '', status: 'to do' });
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.tasks = JSON.stringify(updatedTasks);
  };

  const editTask = (task) => {
    setEditMode(true);
    setNewTask(task);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map(task => task.id === newTask.id ? newTask : task);
    setTasks(updatedTasks);
    localStorage.tasks = JSON.stringify(updatedTasks);
    setNewTask({ title: '', description: '', status: 'to do' });
    setEditMode(false);
  };

  // Filter tasks based on filter state
  useEffect(() => {
    let filteredTasks = tasks;
    if (filter !== 'all') {
      filteredTasks = tasks.filter(task => task.status === filter);
    }
    setDisplayedTasks(filteredTasks);
  }, [tasks, filter]);

  return (
    <div className={styles['manage-tasks']}>
      <h1>Manage Tasks</h1>
      <div className={styles['task-form']}>
        <input type="text" name="title" value={newTask.title} onChange={handleChange} placeholder="Title" />
        <textarea name="description" value={newTask.description} onChange={handleChange} placeholder="Description"></textarea>
        <select name="status" value={newTask.status} onChange={handleChange}>
          <option value="wishlist">Wishlist</option>
          <option value="to do">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        {editMode ? (
          <button onClick={updateTask}>Update Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>
      <div className={styles['search-filter']}>
        <select name="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All tasks</option>
          <option value="wishlist">Wishlist</option>
          <option value="to do">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className={styles['task-list']}>
        {displayedTasks.map((task) => (
          <div className={styles['task-card']} key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => editTask(task)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageTasks;
