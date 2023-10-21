from models.text_event import TextEvent 
from models.event import Event
from models.image import Image

class Interview:
    def __init__(self, interview_id: int):
        self.interview_id = interview_id
        self.iframe = ''
        self.events: [Event] = []
        self.images: [Image] = []
        self.processed = False
        self.text_events: [TextEvent] = []
    
    def to_json(self):
        return {'interview_id': self.interview_id, 
                'events': [event.to_json() for event in self.events], 
                 'images': [image.to_json() for image in self.images],
                 'iframe': self.iframe,
                 'processed': self.processed,
                 'text_events': [text_event.to_json() for text_event in self.text_events]}

