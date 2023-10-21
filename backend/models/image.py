from models.sentiment import Sentiment

class Image:
    def __init__(self, face_image: str, screen_image: str, time: int, image_id: int, sentiments: [Sentiment]):
        self.face_image = face_image
        self.screen_image = screen_image
        self.time = time
        self.image_id = image_id
        self.sentiments = sentiments
    
    def add_sentiment(self, sentiment: Sentiment):
        self.sentiments.append(sentiment)

    def to_json(self):
        return {'face_image': self.face_image, 
                'screen_image': self.screen_image, 
                'time': self.time,
                'image_id': self.image_id,
                'sentiment': [sentiment.to_json() for sentiment in self.sentiments]}