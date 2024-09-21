# ingestion_app/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import TelematicsData

# Data fetching Using WebSockets (Telematics Devices & Sensors)
# Define a consumer that listens for incoming WebSocket messages.
class TelematicsConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        device_id = data['device_id']
        latitude = data['latitude']
        longitude = data['longitude']
        speed = data.get('speed', None)
        sensor_data = data.get('sensor_data', {})

        # Save data to the database
        await self.save_telematics_data(device_id, latitude, longitude, speed, sensor_data)

    @staticmethod
    async def save_telematics_data(device_id, latitude, longitude, speed, sensor_data):
        TelematicsData.objects.create(
            device_id=device_id,
            latitude=latitude,
            longitude=longitude,
            speed=speed,
            sensor_data=sensor_data
        )
