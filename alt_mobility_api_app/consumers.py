# consumers.py
from channels.generic.websocket import WebsocketConsumer
import json

class AlertConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def receive(self, text_data):
        self.send(text_data=json.dumps({
            'message': 'New alert received'
        }))