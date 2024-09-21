import React from 'react';
import { useSelector } from 'react-redux';
import AlertsBox from './AlertsBox'; // Make sure to import the AlertsBox component
import AlertsGraph from './AlertsGraph';

const calculateAlerts = (alerts) => {
  const currentTime = new Date();
  const sixtySecondsAgo = new Date(currentTime - 60 * 1000);

  let totalResolvedAlerts = 0, totalUnresolvedAlerts = 0, totalAlerts = 0;
  let uniqueVehicles = new Set();
  const alertsPerSecond = Array(60).fill(0); // Array to hold alert counts per second

  for (const alert of alerts) {

    // Break the loop if the alert is more than 60 seconds old
    if (new Date(alert.created_at) < sixtySecondsAgo) {
      break;
    }
    // Count alerts generated in last 60 seconds
    totalAlerts++;
    // Count resolved alerts
    if (alert.status === 'resolved') {
      totalResolvedAlerts++;
    } else { // Count unresolved alerts
      totalUnresolvedAlerts++;
    }
    // Count unique vehicles
    uniqueVehicles.add(alert.vehicle_id);
    
    // Increment the count for the corresponding second
    const alertTime = new Date(alert.created_at);
    const secondsElapsed = Math.floor((currentTime - alertTime) / 1000);
    if (secondsElapsed < 60) {
      alertsPerSecond[59 - secondsElapsed]++; // Increment the count for this second
    }
  };

  // Calculating metrics
  const avgResolvedPercentage = totalAlerts > 0 ? (totalResolvedAlerts / totalAlerts) * 100 : 0;
  const avgAlertsPerSec = totalAlerts / 60;
  const avgAlertsPerVehicle = uniqueVehicles.size > 0 ? totalAlerts / uniqueVehicles.size : 0;
  const avgResolvedAlertsPerSec = totalResolvedAlerts / 60;
  const avgUnresolvedAlertsPerSec = totalUnresolvedAlerts / 60;

  return {
    avgResolvedPercentage,
    avgAlertsPerSec,
    avgAlertsPerVehicle,
    avgResolvedAlertsPerSec,
    avgUnresolvedAlertsPerSec,
    alertsPerSecond
  };
};

const Dashboard = () => {
  const criticalAlerts = useSelector((state) => state.criticalAlerts);
  const nonCriticalAlerts = useSelector((state) => state.nonCriticalAlerts);

  // Calculate metrics for critical and non-critical alerts
  const criticalMetrics = calculateAlerts(criticalAlerts);
  const nonCriticalMetrics = calculateAlerts(nonCriticalAlerts);

  return (
    <div className="alerts-container">
      <div className="alerts-column">
        <AlertsBox data={criticalMetrics} title="Critical Alerts" />
        <AlertsGraph alertsPerSecond={criticalMetrics.alertsPerSecond} title="Critical Alerts Over Last 60 Seconds" />
      </div>
      <div className="alerts-column">  
        <AlertsGraph alertsPerSecond={nonCriticalMetrics.alertsPerSecond} title="Non-Critical Alerts Over Last 60 Seconds" />
        <AlertsBox data={nonCriticalMetrics} title="Non-Critical Alerts" />
      </div>
    </div>
  );
};

export default Dashboard;
