import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AltMobility.settings')
CELERY_BROKER_URL = 'amqp://guest:guest@localhost:5672//'

app = Celery('AltMobility')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()