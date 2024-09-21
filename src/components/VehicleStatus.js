import React from 'react';

const VehicleStatus = () => {
  const vehicles = [
    { id: '123', status: 'Active', location: '34.0522 N, 118.2437 W' },
    { id: '456', status: 'Inactive', location: '40.7128 N, 74.0060 W' },
    { id: '789', status: 'Offline', location: '37.7749 N, 122.4194 W' }
  ];

  return (
    <div className="vehicle-status">
      <h2>Vehicle Status</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.id} - {vehicle.status} - {vehicle.location}
          </li>
        ))}
      </ul>
      <div className="map-placeholder">
        <p>Map Integration Goes Here</p>
      </div>
    </div>
  );
};

export default VehicleStatus;
