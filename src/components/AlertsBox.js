import React from 'react';
import './AlertsBox.css';

const AlertsBox = ({ data, title }) => {
  const {
    avgResolvedPercentage,
    avgAlertsPerSec,
    avgAlertsPerVehicle,
    avgResolvedAlertsPerSec,
    avgUnresolvedAlertsPerSec
  } = data;

  return (
    <div className="alert-box">
      <h3>{title}</h3>
      <p><strong>Resolved Alerts Percentage:</strong> {avgResolvedPercentage.toFixed(2)}%</p>
      <p><strong>Average Alerts per Second:</strong> {avgAlertsPerSec.toFixed(2)}</p>
      <p><strong>Average Alerts per Vehicle:</strong> {avgAlertsPerVehicle.toFixed(2)}</p>
      <p><strong>Average Resolved Alerts per Second:</strong> {avgResolvedAlertsPerSec.toFixed(2)}</p>
      <p><strong>Average Unresolved Alerts per Second:</strong> {avgUnresolvedAlertsPerSec.toFixed(2)}</p>
    </div>
  );
};

export default AlertsBox;
