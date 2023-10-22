from typing import Tuple
from models.sentiment import Sentiment

class TextEvent:
    def __init__(self,text: str, time: Tuple[str, str], sentiment: Sentiment=None):
        self.text = text
        self.time = time
        self.sentiment = sentiment
    
    def add_sentiment(self, sentiment):
        self.sentiment = sentiment

    def to_json(self):
        return { 'text': self.text,
                'time': [self.time[0], self.time[1]],
                'sentiment': self.sentiment.to_json()}

