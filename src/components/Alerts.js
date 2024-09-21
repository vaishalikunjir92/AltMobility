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
    severity: "Critical",
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
    severity: "Critical",
  }
];

const Alerts = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [filter, setFilter] = useState("critical");

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  // Custom classification based on alert_type
  const classifyAlert = (alert) => {
    switch (alert.alert_type) {
      case "InsuranceRenewal":
        return "non-critical-green";
      case "LowCharge":
        return "critical-yellow";
      case "VehicleOffline":
        return "critical-orange";
      case "DeepDischarge":
        return "critical-red";
      default:
        return alert.severity === "Critical" ? "critical" : "non-critical";
    }
  };

  const filteredAlerts = alertsData.filter(alert => {
    if (filter === "critical") {
      // Ensure 'InsuranceRenewal' does not appear under critical even if its severity is 'Normal'
      return classifyAlert(alert).includes("critical") && alert.alert_type !== "InsuranceRenewal";
    } else if (filter === "non-critical") {
      return classifyAlert(alert).includes("non-critical");
    }
    return true;
  });

  return (
    <div className="alerts">
      <h2>Real-Time Alerts</h2>

      {/* Navigation buttons */}
      <div className="alert-nav">
        <button onClick={() => handleFilterChange("critical")} className={filter === "critical" ? "active" : ""}>
          Critical
        </button>
        <button onClick={() => handleFilterChange("non-critical")} className={filter === "non-critical" ? "active" : ""}>
          Non-Critical
        </button>
      </div>

      <ul>
        {filteredAlerts.map(alert => (
          <li key={alert.id} onClick={() => handleAlertClick(alert)}>
            <span className={`alert-tag ${classifyAlert(alert)}`}>{alert.alert_type}</span>
            <span >{alert.message}</span> - Vehicle ID: {alert.vehicle_id}

          </li>
        ))}
      </ul>
        <div className="goat">
     {selectedAlert && <AlertDetailModal alert={selectedAlert} close={() => setSelectedAlert(null)} />}
      </div>
    </div>
  );
};

export default Alerts;


