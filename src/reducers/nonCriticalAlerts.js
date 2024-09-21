import { GENERATE_NONCRITICAL_ALERT } from "../constants/actionTypes";

export default (nonCriticalAlerts = [], action) => {
    switch (action.type) {
        case GENERATE_NONCRITICAL_ALERT: {
            const { alert } = action.payload;
            const { vehicle_id } = alert;

            // Filter out any existing alerts for the same vehicle id
            let updatedAlerts = nonCriticalAlerts.filter(
                existingAlerts => {
                    if ( existingAlerts.vehicle_id !== vehicle_id )
                        return existingAlerts;
                }
            );
            
            return [alert, ...updatedAlerts];
        }
        default:
            return nonCriticalAlerts;
    }
};
