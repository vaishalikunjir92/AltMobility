import React from 'react';
import './Header.css'; // Add some CSS for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Fleet Management Dashboard</h1>
      <div className="header-actions">
        <button className="notification-icon">🔔</button>
        <div className="profile">👤 Profile</div>
      </div>
    </header>
  );
};

export default Header;
