from flask import Flask, request
import threading
from queue_task import QueueTask, TaskType
from queue_processing import update_queue_task, queue_statuses, data_writer, producer, consumer
import time
import uuid

app = Flask(__name__)

@app.route('/', methods=['GET'])
def entry_point():
    return '<p>Sentimetrix!</p>', 200

@app.route('/v1/interview/start/', methods=['GET'])
def interview_start():
    new_uuid = uuid.uuid1()
    new_queue_task = QueueTask(new_uuid, None, None, TaskType.START)
    update_queue_task(new_queue_task)
    return new_uuid, 200

@app.route('/v1/interview/end/<interview_id>', methods=['GET'])
def interview_end(interview_id):
    update_queue_task(QueueTask(interview_id, None, None, TaskType.END))
    return 'Success', 200

@app.route('/v1/interview/screenshot', methods=['POST'])
def receive_screenshot():
    request_body = request.get_json()
    interview_id = request_body['interviewID']
    if interview_id not in queue_statuses:
        return f'Error, interview: {interview_id} not found.', 404
    image = request_body['image']
    task = QueueTask(interview_id, image, time.time())
    update_queue_task(task)
    return 'Success', 200

"""
This method should only be called once interview_status returns a 200 status code,
indicating that the interview images are done processing.
"""
@app.route('/v1/interview/sentiment/<interview_id>', methods=['GET'])
def interview_sentiment(interview_id):
    if interview_id not in queue_statuses:
        return 'Interview not found', 404
    
    interview_sentiment = data_writer.get_sentiment_data(interview_id)
    return interview_sentiment, 200
    

@app.route('/v1/queue/status/<interview_id>', methods=['GET'])
def interview_status(interview_id):
    if interview_id not in queue_statuses:
        return 'Interview not found', 500

    if queue_statuses[interview_id] == 'COMPLETED':
        return 'Completed', 200
    else:
        return 'Processing in progress', 404


def main():
    app.run(debug=True)
    producer_thread = threading.Thread(target=producer)
    consumer_thread = threading.Thread(target=consumer)
    producer_thread.start()
    consumer_thread.start()

if __name__ == '__main__':
    main()