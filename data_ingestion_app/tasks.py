from celery import shared_task
import requests
from .models import TelematicsData

@shared_task
def process_telematics_data(device_id, latitude, longitude, speed, sensor_data):
    TelematicsData.objects.create(
        device_id=device_id,
        latitude=latitude,
        longitude=longitude,
        speed=speed,
        sensor_data=sensor_data
    )


@shared_task
def fetch_external_data():
    # Using test API ==> https://api.example.com/telematics
    response = requests.get('https://api.example.com/telematics')
    if response.status_code == 200:
        data = response.json()
        # Process and store the data as needed
