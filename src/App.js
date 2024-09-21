import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts'; // Assuming you have this component
import Reports from './components/Reports';
import Settings from './components/Settings';
import './App.css'; // For overall styling
import VehicleStatus from './components/VehicleStatus';

const App = () => {
  const [page, setPage] = useState('dashboard');

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard />;
      case 'alerts':
        return <Alerts />;
      case 'reports':
        return <Reports />;
        case 'vehicles':
        return <VehicleStatus />;
      case 'settings':
        return <Settings />;
      
      // Add other pages (vehicles, settings)
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
