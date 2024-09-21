from django.contrib import admin
from .models import VehicleInfo, Alert, AdditionalAlert

# Register your models here.
admin.site.register(VehicleInfo)
admin.site.register(Alert)
admin.site.register(AdditionalAlert)
