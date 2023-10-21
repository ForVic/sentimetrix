from enum import Enum

class TaskType(Enum):
    PROCESS = 'PROCESS'
    START = 'START'
    END = 'END'


class QueueTask:
    def __init__(self, image, interview_id, time, type: TaskType = TaskType.PROCESS.value):
        self.image = image
        self.interview_id = interview_id
        self.time = time
        self.type = type.value
        
    
    