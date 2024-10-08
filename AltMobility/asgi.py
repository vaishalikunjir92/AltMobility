"""
ASGI config for AltMobility project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

# import os

# from django.core.asgi import get_asgi_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AltMobility.settings')

# application = get_asgi_application()
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from data_ingestion_app.consumers import TelematicsConsumer
from django.urls import path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AltMobility.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    # WebSocket protocol setup will go here (in Step 3)
    "websocket": AuthMiddlewareStack(
        URLRouter([
            path('ws/telematics/', TelematicsConsumer.as_asgi()),
        ])
    ),
    
})
