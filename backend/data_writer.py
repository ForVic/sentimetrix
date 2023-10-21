import json
from typing import List
from models.interview import Interview
from models.event import Event 
from models.image import Image 
from models.text_event import TextEvent 
from webvtt import WebVTT
import webvtt

class DataReaderWriter:
    DATA_PREFIX = "data/"
    INTERVIEW_PREFIX = "interview/"
    TRANSCRIPT_PREFIX = "transcript/"
    def __init__(self):
        pass

    def write_vtt(self, interview_id, vtt_text: str):
        file_name = self.transcript_file_name(interview_id)
        with open(file_name, 'w') as f:
            f.write(vtt_text)
    
    def read_vtt_to_captions(self, interview_id):
        file_name = self.transcript_file_name(interview_id)
        captions: WebVTT = webvtt.read(file_name)
        return captions
    
    def update_image_sentiment(self, interview_id, screenshot):
        file_name = self.DATA_PREFIX + self.INTERVIEW_PREFIX + interview_id + '.json'

        with open(file_name, "r") as f:
            data = json.load(f)
            data['screenshots'].append(screenshot)

        with open(file_name, "w") as f:
            json.dump(data, f)
    
    def write_new_interview(self, interview: Interview):
        file_name = self.interview_file_name(interview.interview_id) 

        with open(file_name, "w") as f:
            json.dump(interview.to_json(), f)
    
    def add_event_to_interview(self, interview_id, events: List[Event]):
        file_name = self.interview_file_name(interview_id) 

        with open(file_name, "r") as f:
            data = json.load(f)
            data['events'] = [event.to_json() for event in events]
        
        with open(file_name, "w") as f:
            json.dump(data, f)

    def add_iframe_to_interview(self, interview_id, iframe: str):
        file_name = self.interview_file_name(interview_id) 

        with open(file_name, "r") as f:
            data = json.load(f)
            data['iframe'] = iframe 
        
        with open(file_name, "w") as f:        
            json.dump(data, f)

    def get_iframe_by_interview_id(self, interview_id):
        file_name = self.interview_file_name(interview_id)        
        with open(file_name, "r") as f:
            data = json.load(f)
            iframe = data['iframe']
            return iframe

    def transcript_file_name(self, interview_id):
        return self.DATA_PREFIX + self.TRANSCRIPT_PREFIX + interview_id + '.vtt'

    def interview_file_name(self, interview_id):
        return self.DATA_PREFIX + self.INTERVIEW_PREFIX + interview_id + '.json'

    def add_image_to_interview(self, interview_id, image: Image):
        file_name = self.interview_file_name(interview_id)
        with open(file_name, "r") as f:
            data = json.load(f)
            data['images'].append(image.to_json())

        with open(file_name, "w") as f:
            json.dump(data)
    
    def add_text_events(self, interview_id, text_events: List[TextEvent]):
        file_name = self.interview_file_name(interview_id)
        with open(file_name, "r") as f:
            data = json.load(f)
            data['text_events'] = [text_event.to_json() for text_event in text_events]
        
        with open(file_name, "w") as f:
            json.dump(data)
         
    def new_sentiment_file(self, interview_id):
        file_name = self.DATA_PREFIX + interview_id + '.json'
        with open(file_name, "w") as file:
            data = {"screenshots": []}
            json.dump(data, file)
    
    def get_sentiment_data(self, interview_id):
        file_name = self.DATA_PREFIX + interview_id + '.json'
        with open(file_name, r) as f:
            data = json.load(f)
        return data