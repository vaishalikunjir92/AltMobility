import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setPage }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => setPage('dashboard')}>Dashboard</li>
        <li onClick={() => setPage('alerts')}>Alerts</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
