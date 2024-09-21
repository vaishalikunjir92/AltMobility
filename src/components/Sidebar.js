import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setPage }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => setPage('dashboard')}>Dashboard</li>
        <li onClick={() => setPage('alerts')}>Alerts</li>
        <li onClick={() => setPage('vehicles')}>Vehicles</li>
        <li onClick={() => setPage('reports')}>Reports</li>
        <li onClick={() => setPage('settings')}>Settings</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
