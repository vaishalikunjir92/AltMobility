import React from 'react';
import { useSelector } from 'react-redux';
import AlertsBox from './AlertsBox';
import AlertsGraph from './AlertsGraph';
import './Dashboard.css';

const calculateAlerts = (alerts) => {
  const currentTime = new Date();
  const sixtySecondsAgo = new Date(currentTime - 60 * 1000);

  let totalResolvedAlerts = 0,
    totalUnresolvedAlerts = 0,
    totalAlerts = 0;
  let uniqueVehicles = new Set();
  const alertsPerSecond = Array(60).fill(0); // Array to hold alert counts per second

  for (const alert of alerts) {
    if (new Date(alert.created_at) < sixtySecondsAgo) {
      break; // Break the loop if the alert is more than 60 seconds old
    }

    totalAlerts++; // Count total alerts in the last 60 seconds

    if (alert.status === 'resolved') {
      totalResolvedAlerts++; // Count resolved alerts
    } else {
      totalUnresolvedAlerts++; // Count unresolved alerts
    }

    uniqueVehicles.add(alert.vehicle_id); // Count unique vehicles

    const alertTime = new Date(alert.created_at);
    const secondsElapsed = Math.floor((currentTime - alertTime) / 1000);
    if (secondsElapsed < 60) {
      alertsPerSecond[59 - secondsElapsed]++; // Increment the count for the second
    }
  }

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
    alertsPerSecond,
  };
};

const Dashboard = () => {
  const criticalAlerts = useSelector((state) => state.criticalAlerts);
  const nonCriticalAlerts = useSelector((state) => state.nonCriticalAlerts);

  const criticalMetrics = calculateAlerts(criticalAlerts); // Metrics for critical alerts
  const nonCriticalMetrics = calculateAlerts(nonCriticalAlerts); // Metrics for non-critical alerts

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
