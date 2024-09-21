import React from 'react';
import './AlertsGraph.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AlertsGraph = ({ alertsPerSecond, title}) => {
  // Prepare data for the graph
  console.log(title);
  const data = alertsPerSecond.map((alerts, index) => ({
    second: index + 1, // X-axis label (1 to 60 seconds)
    alerts, // Y-axis value (number of alerts)
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="second" label={{ value: 'Seconds', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Alerts', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="alerts" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AlertsGraph;

