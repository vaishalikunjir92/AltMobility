from django.contrib import admin
from .models import VehicleData, Alert

# Register your models here.
admin.site.register(VehicleData)
admin.site.register(Alert)
