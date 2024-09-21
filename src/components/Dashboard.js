import React from 'react';
import Alerts from './Alerts';
import VehicleStatus from './VehicleStatus';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="alert-overview">
        <div className="alert-card critical">Critical Alerts: 5</div>
        <div className="alert-card non-critical">Non-Critical Alerts: 10</div>
        <div className="alert-card anomalies">Anomalies Detected: 3</div>
        <div className="alert-card offline">Vehicles Offline: 2</div>
      </div>
      <div className="dashboard-main">
        <Alerts />
        <VehicleStatus />
      </div>
    </div>
  );
};

export default Dashboard;
