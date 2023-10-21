import json

class DataReaderWriter:
    DATA_PREFIX = "/data/"
    def __init__(self):
        pass

    def update_image_sentiment(self, interview_id, screenshot):
        file_name = self.DATA_PREFIX + interview_id + '.json'

        with open(file_name, "r") as f:
            data = json.load(f)
            data['screenshots'].append(screenshot)

        with open(file_name, "w") as f:
            json.dump(data, f)
            
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