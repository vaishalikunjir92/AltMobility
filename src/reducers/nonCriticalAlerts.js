const alerts = [
    {
        "id": 326254,
        "alert_type": "InsuranceRenewal",
        "vehicle_id": "AB93EF6RFPB545339",
        "message": "Insurance Expiry",
        "value": "2024/08/08",
        "status": "resolved",
        "created_at": "2024-08-06 11:47:25.349 +0530",
        "updated_at": "2024-09-04 22:13:47.162 +0530",
        "additional_fields": {
            "insurance_provider": {
                "insurer": "Royal Sundaram General Insurance Co. Limited"
            },
            "due_date": "2024-08-08T00:00:00.000Z",
            "renewal_status": true,
            "time_due": 1,
            "policy_number": "VGC0987155000100"
        },
        "latitude": "",
        "latitude_direction": "",
        "longitude": "",
        "longitude_direction": "",
        "severity": "Normal",
        "service_request_id": "",
        "date_value": "2024-08-08 00:00:00.000",
        "freshdesk_ticket_id": "",
        "threshold_id": ""
    }
];

const initialState = alerts;

export default (nonCriticalAlerts = initialState, action) => {
    switch (action.type) {
        // Handle your actions here
        default:
            return nonCriticalAlerts; // Return the current state if no actions match
    }
};
