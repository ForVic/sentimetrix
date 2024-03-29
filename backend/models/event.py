class Event:
    def __init__(self, event_name: str, timestamp: str):
        self.event_name = event_name
        self.timestamp = timestamp
    
    def to_json(self):
        return {'event_name': self.event_name, 'timestamp': self.timestamp}
    
    @staticmethod
    def from_json(json):
        return Event(json['event_name'], json['timestamp'])