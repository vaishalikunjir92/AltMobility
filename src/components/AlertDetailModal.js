import React from 'react';
//import './AlertDetailModal.css';

const AlertDetailModal = ({ alert, close }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Alert Details</h3>
        <p><strong>Alert Type:</strong> {alert.alert_type}</p>
        <p><strong>Message:</strong> {alert.message}</p>
        <p><strong>Value:</strong> {alert.value}</p>
        <p><strong>Status:</strong> {alert.status}</p>
        <p><strong>Created At:</strong> {alert.created_at}</p>
        <p><strong>Severity:</strong> {alert.severity}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default AlertDetailModal;
