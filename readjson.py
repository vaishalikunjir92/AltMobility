import json
import time

def read_json_in_chunks(file_path, chunk_size=100):
    with open(file_path, 'r') as file:
        data = json.load(file)
        for i in range(0, len(data), chunk_size):
            yield data[i:i + chunk_size]

# Usage
json_file_path = r"C:/Users/sarikmishra/Downloads/VehicleDataFor5DaysOfSomeVehicles5ba734d.json"
for chunk in read_json_in_chunks(json_file_path):
    print(chunk)
    print("======================================================================")
    time.sleep(10)  # Wait for 10 seconds before the next chunk

# import json

# def find_json_error(file_path):
#     try:
#         with open(file_path, 'r') as f:
#             json.load(f)
#         print("No errors found in the JSON file.")
#     except json.JSONDecodeError as e:
#         # JSONDecodeError contains line and column information where the error occurred
#         print(f"Error detected in the JSON file: {e}")
#         print(f"Error at line {e.lineno}, column {e.colno}: {e.msg}")

# # Replace 'your_file.json' with the path to your JSON file
# fp = r"C:/Users/sarikmishra/Downloads/VehicleDataFor5DaysOfSomeVehicles5ba734d.json"
# find_json_error(fp)
