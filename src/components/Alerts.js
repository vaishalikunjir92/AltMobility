import React, { useState } from 'react';
import AlertDetailModal from './AlertDetailModal';
import './Alerts.css';


// Sample alert data
const alertsData = [
  {
    id: 326254,
    alert_type: "InsuranceRenewal",
    vehicle_id: "AB93EF6RFPB545339",
    message: "Insurance Expiry",
    value: "2024/08/08",
    status: "resolved",
    created_at: "2024-08-06 11:47:25.349 +0530",
    severity: "Normal",
  },
  {
    id: 329056,
    alert_type: "VehicleOffline",
    vehicle_id: "AB93EF6RFPB545339",
    message: "Vehicle Offline",
    value: "27-08-2024",
    status: "active",
    created_at: "2024-08-29 19:50:17.827 +0530",
    severity: "Normal",
  },
  {
    id: 328583,
    alert_type: "DeepDischarge",
    vehicle_id: "AB93EF6RFPB545339",
    message: "Vehicle In Deep Discharge",
    value: "21-06-2010",
    status: "resolved",
    created_at: "2024-08-27 19:05:18.585 +0530",
    severity: "Normal",
  },
  {
    id: 340981,
    alert_type: "LowCharge",
    vehicle_id: "AB93EF6RFPB545339",
    message: "Low Battery",
    value: "9%",
    status: "resolved",
    created_at: "2024-09-04 18:15:02.595 +0530",
    severity: "Normal",
  }
];

const Alerts = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="alerts">
      <h2>Real-Time Alerts</h2>
      <ul>
        {alertsData.map(alert => (
          <li key={alert.id} onClick={() => handleAlertClick(alert)}>
            <span className={`severity ${alert.severity.toLowerCase()}`}>{alert.severity}</span>
            <span>{alert.message}</span> - Vehicle ID: {alert.vehicle_id}
          </li>
        ))}
      </ul>

      {selectedAlert && <AlertDetailModal alert={selectedAlert} close={() => setSelectedAlert(null)} />}
    </div>
  );
};

export default Alerts;
