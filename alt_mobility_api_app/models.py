from django.db import models


PRIORITY_CHOICES = [
    ('critical', 'Critical'),
    ('non_critical', 'Non-Critical')
]

# class VehicleData(models.Model):
#     vehicle_id = models.CharField(max_length=50)
#     timestamp = models.DateTimeField(auto_now_add=True)
#     speed = models.FloatField()
#     engine_temp = models.FloatField()
#     location = models.CharField(max_length=100)  # Could also use a GeoField for geolocation
#     alert_type = models.CharField(max_length=100)

#     priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='non_critical')
#     impact = models.IntegerField(default=0)  # Scale of 1-10

#     def __str__(self):
#         return f"Vehicle {self.vehicle_id} - {self.timestamp}"
    
class Alert(models.Model):
    id = models.AutoField(primary_key=True)  # id field with auto-increment behavior
    alert_type = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    vehicle_id = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    message = models.TextField(null=True, blank=True)  # TEXT
    value = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    status = models.CharField(max_length=20, null=True, blank=True)  # VARCHAR(20)
    created_at = models.DateTimeField(null=True, blank=True)  # TIMESTAMP with time zone
    updated_at = models.DateTimeField(null=True, blank=True)  # TIMESTAMP with time zone
    latitude = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    latitude_direction = models.CharField(max_length=1, null=True, blank=True)  # CHAR(1)
    longitude = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    longitude_direction = models.CharField(max_length=1, null=True, blank=True)  # CHAR(1)
    severity = models.CharField(max_length=20, null=True, blank=True)  # VARCHAR(20)
    service_request_id = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    date_value = models.DateTimeField(null=True, blank=True)  # TIMESTAMP with time zone
    freshdesk_ticket_id = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)
    threshold_id = models.CharField(max_length=50, null=True, blank=True)  # VARCHAR(50)

    class Meta:
        db_table = 'vehicle_alerts'  # Map to existing 'alerts' table in PostgreSQL

    def __str__(self):
        return f"Alert {self.id} - {self.alert_type} for vehicle {self.vehicle_id}"


class VehicleInfo(models.Model):
    id = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    iot_connected = models.BooleanField(null=True, blank=True)
    battery_percentage = models.IntegerField(null=True, blank=True)
    drive_mode = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    imei = models.CharField(max_length=50, null=True, blank=True)
    ambient_temp = models.CharField(max_length=50, null=True, blank=True)
    battery_current = models.CharField(max_length=50, null=True, blank=True)
    battery_efficiency = models.CharField(max_length=50, null=True, blank=True)
    battery_health = models.CharField(max_length=50, null=True, blank=True)
    battery_temp = models.CharField(max_length=50, null=True, blank=True)
    battery_usage = models.CharField(max_length=50, null=True, blank=True)
    battery_vital_score = models.CharField(max_length=50, null=True, blank=True)
    behavior_acceleration = models.CharField(max_length=50, null=True, blank=True)
    behavior_breaking = models.CharField(max_length=50, null=True, blank=True)
    behavior_last_updated = models.DateTimeField(null=True, blank=True)
    behavior_overspeed = models.CharField(max_length=50, null=True, blank=True)
    charge_cycles = models.CharField(max_length=50, null=True, blank=True)
    co2_saved = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    controller_temp = models.CharField(max_length=50, null=True, blank=True)
    distance_to_empty = models.CharField(max_length=50, null=True, blank=True)
    est_resale_val = models.CharField(max_length=50, null=True, blank=True)
    fuel_saved = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    last_seen_at = models.DateTimeField(null=True, blank=True)
    latitude = models.DecimalField(max_digits=10, decimal_places=6, null=True, blank=True)
    lease_start_reading = models.CharField(max_length=50, null=True, blank=True)
    location_last_updated = models.DateTimeField(null=True, blank=True)
    longitude = models.DecimalField(max_digits=10, decimal_places=6, null=True, blank=True)
    motor_temp = models.CharField(max_length=50, null=True, blank=True)
    remaining_battery_capacity = models.CharField(max_length=50, null=True, blank=True)
    resale_val_comparison = models.CharField(max_length=50, null=True, blank=True)
    total_battery_capacity = models.CharField(max_length=50, null=True, blank=True)
    total_energy = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    vehicle_condition = models.CharField(max_length=50, null=True, blank=True)
    vehicle_efficiency = models.CharField(max_length=50, null=True, blank=True)
    charging = models.BooleanField(null=True, blank=True)
    last_speed = models.IntegerField(null=True, blank=True)
    max_speed = models.IntegerField(null=True, blank=True)
    stops_for_the_day = models.CharField(max_length=50, null=True, blank=True)
    total_operational_hours = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    battery_voltage = models.CharField(max_length=50, null=True, blank=True)
    distance_travelled_today = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_odometer = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    vehicle_id = models.CharField(max_length=50, null=True, blank=True)
    daily_avg_speed = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    daily_speed_count = models.IntegerField(null=True, blank=True)
    monthly_runtime = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    monthly_distance_travelled = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    latitude_direction = models.CharField(max_length=1, null=True, blank=True)
    longitude_direction = models.CharField(max_length=1, null=True, blank=True)
    daily_odometer_start = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    additional_fields = models.CharField(max_length=50, null=True, blank=True)
    averagebatterytemp = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    totalchargecurrent = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    totalchargecurrentathightemperature = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    totaldischargecurrent = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    totaldischargecurrentathightemperature = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    class Meta:
        db_table = 'vehicle_info'  # Map to existing 'vehicleinfo' table in PostgreSQL
        

    def __str__(self):
        return f"Vehicle ID: {self.vehicle_id} - Status: {self.vehicle_condition}"  
    
class AdditionalAlert(models.Model):
    id = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    insurance_provider_issuer = models.TextField(null=True, blank=True)
    due_date = models.DateField(null=True, blank=True)
    renewal_status = models.BooleanField(null=True, blank=True)
    time_due = models.IntegerField(null=True, blank=True)
    policy_number = models.TextField(null=True, blank=True)
    offline_days = models.IntegerField(null=True, blank=True)
    idle_days = models.IntegerField(null=True, blank=True)
    min_cell_voltage = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    last_soc = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    last_seen = models.DateTimeField(null=True, blank=True)
    days_since = models.IntegerField(null=True, blank=True)
    alert_id = models.ForeignKey('Alert', on_delete=models.CASCADE, null=True, blank=True)  # Foreign key to the Alert model

    class Meta:
        db_table = 'additional_alerts'  # Map to existing 'additionalalerts' table in PostgreSQL
        managed = True

    def __str__(self):
        return f"Additional Alert ID: {self.id} - Policy Number: {self.policy_number if self.policy_number else 'N/A'}"


