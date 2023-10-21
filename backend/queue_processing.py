from main import update_queue_task, queue_statuses, app
from flask import request
import time
from queue_task import QueueTask, TaskType
import data_writer
import queue
from data_writer import DataWriter
import random
import time
import utils

queue = queue.Queue()
data_writer = DataWriter()
queue_task = None
queue_statuses = {}

def rnd_sleep(t):
    time.sleep(t * random.random() * 2)

def producer():
    global queue_task
    if queue_task:
        queue.put(QueueTask(queue_task.interview_id, queue_task.image, queue_task.time, queue_task.type))
        queue_task = None
        rnd_sleep(.1)

def consumer():
    global queue_task
    while True:
        task: QueueTask = queue.get()
        if task.type == TaskType.END:
            queue_statuses[task.interview_id] = 'COMPLETED'
            rnd_sleep(.1)
            queue.task_done()
        elif task.type == TaskType.PROCESS:
            image_sentiment = utils.classify_image(task.image)
            data_writer.update_image_sentiment(task.interview_id, image_sentiment)
            rnd_sleep(.3)
        elif task.type == TaskType.START:
            data_writer.new_sentiment_file(task.interview_id)
            queue_statuses[task.interview_id] = 'IN_PROGRESS'
            rnd_sleep(.3)

        queue.task_done()
        print(f"Consumed task: {task.interview_id} with type: {task.type}")

def update_queue_task(task: QueueTask):
    global queue_task
    queue_task = task