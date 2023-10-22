class Sentiment:
    def __init__(self, score: float, label: str):
        self.score = score
        self.label = label

    def to_json(self):
        return {'score': self.score, 'label': self.label}
