import { GENERATE_CRITICAL_ALERT } from "../constants/actionTypes";

export default (criticalAlerts = [], action) => {
    switch (action.type) {
        case GENERATE_CRITICAL_ALERT: {
            const { alert } = action.payload;
            const { alert_type, vehicle_id } = alert;
            let existingAlert;

            // Filter out any existing alerts for the same vehicle id
            let updatedAlerts = criticalAlerts.filter(
                existingAlerts => {
                    if ( existingAlerts.vehicle_id !== vehicle_id )
                        return existingAlerts;
                    existingAlert = existingAlerts;
                }
            );

            if ( (alert_type === "LowCharge" && existingAlert.alert_type === "VehicleOffline") || (alert_type === "VehicleOffline" && existingAlert.alert_type === "LowChargeVehicleOffline") ) {
                existingAlert.status = "Resolved";
                return [alert, existingAlert, ...updatedAlerts];
            }

            // Return the updated state with the new alert added
            return [alert, ...updatedAlerts];
        }
        default:
            return criticalAlerts;
    }
};
