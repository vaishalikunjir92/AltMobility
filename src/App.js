import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';
import './App.css'; // For overall styling
import generateAlert from './actions/generateAlert';

const App = () => {
  const [page, setPage] = useState('dashboard');
  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:8000/api/alerts-data/');

    socket.onmessage = (event) => {
      const newAlert = JSON.parse(event.data);
      generateAlert(newAlert);
    };

    return () => {
      socket.close();
    };
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard />;
      case 'alerts':
        return <Alerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar setPage={setPage} />
        <main>
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
