import json

import time
from django.utils import timezone

from models import VehicleInfo

def read_json_in_chunks(file_path, chunk_size=100):
    with open(file_path, 'r') as file:
        data = json.load(file)
        for i in range(0, len(data), chunk_size):


            yield data[i:i + chunk_size]




json_file_path = r"C:\Users\vaish\Downloads\VehicleData.json"

for json_entry in read_json_in_chunks(json_file_path):
        for data in json_entry:
            print("======================================================================")
            # Filter out any None values in the dictionary
            filtered_data = {key: value for key, value in data.items() if value is not None}
            # Create and save the VehicleInfo instance
            vehicle = VehicleInfo.objects.create(**filtered_data)
            vehicle.save()
            time.sleep(10)  # Wait for 10 second before the next chunk
    

# @shared_task
# def create_alert():
#     for json_entry in read_json_in_chunks(json_file_path):
#         for data in json_entry:
#             print("======================================================================")
#             # Filter out any None values in the dictionary
#             filtered_data = {key: value for key, value in data.items() if value is not None}
#             # Create and save the VehicleInfo instance
#             vehicle = VehicleInfo.objects.create(**filtered_data)
#             vehicle.save()
#             time.sleep(10)  # Wait for 10 second before the next chunk
#     return JsonResponse({"success": True, "alert_id": ''})
