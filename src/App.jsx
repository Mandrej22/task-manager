import React, { useState } from 'react';
import Home from './pages/home/Home';
import ManageTasks from './pages/manage-tasks/ManageTasks';
import Navbar from './components/navbar/Navbar';
import styles from './App.module.scss';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className={styles['app']}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : <ManageTasks />}
    </div>
  );
}

export default App;
