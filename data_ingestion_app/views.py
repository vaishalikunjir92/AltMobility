from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import TelematicsData
import json
from .tasks import process_telematics_data

#Ingesting Data via REST APIs. If devices push data via HTTP, create a Django view to receive the data
@csrf_exempt
def ingest_data(request):
    if request.method == "POST":
        data = json.loads(request.body)
        device_id = data['device_id']
        latitude = data['latitude']
        longitude = data['longitude']
        speed = data.get('speed', None)
        sensor_data = data.get('sensor_data', {})

        # Save data to the database
        TelematicsData.objects.create(
            device_id=device_id,
            latitude=latitude,
            longitude=longitude,
            speed=speed,
            sensor_data=sensor_data
        )
        process_telematics_data.delay(device_id, latitude, longitude, speed, sensor_data)
        return JsonResponse({"status": "success"})

    return JsonResponse({"error": "Invalid request"}, status=400)