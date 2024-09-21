from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VehicleDataViewSet, AlertDataViewSet, AdditionalInfoDataViewSet  # Import your viewset here

# Create a router for DRF viewsets
router = DefaultRouter()
router.register(r'vehicle-data', VehicleDataViewSet)
router.register(r'alerts-data', AlertDataViewSet)
router.register(r'additional-info-data', AdditionalInfoDataViewSet)


# Define the app-specific URLs
urlpatterns = [
    path('', include(router.urls)),  # Include the router for API views
]