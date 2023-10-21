class Event:
    def __init__(self, event_name: str, timestamp: int):
        self.event_name = event_name
        self.timestamp = timestamp
    
    def to_json(self):
        return {'event_name': self.event_name, 'timestamp': self.timestamp}
    
    @staticmethod
    def from_json(self, json):
        return Event(json['event_name'], json['timestamp'])