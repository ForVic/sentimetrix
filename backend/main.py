from flask import Flask, request
from models.image import Image
import threading
from queue_task import QueueTask, TaskType
from queue_processing import update_queue_task, queue_statuses, producer, consumer, data_rw
from data_writer import DataReaderWriter
from models.interview import Interview
from models.event import Event 
from models.text_event import TextEvent
from models.sentiment import Sentiment 
import uuid
import utils.utils

app = Flask(__name__)

@app.route('/', methods=['GET'])
def entry_point():
    return '<p>Sentimetrix!</p>', 200

@app.route('/v1/interview/start/', methods=['GET'])
def interview_start():
    new_uuid = str(uuid.uuid1())
    interview = Interview(new_uuid)
    data_rw.write_new_interview(interview)
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
    interview_id = request_body['interview_id']
    face_image = request_body['face_image']
    screen_image = request_body['screen_image']
    if interview_id not in queue_statuses:
        return f'Error, interview: {interview_id} not found.', 404
    
    time = int(time.time())
    image_sentiment = utils.classify_image(face_image)
    image = Image(face_image, screen_image, time, str(uuid.uuid1()), image_sentiment)
    data_rw.add_image_to_interview(interview_id, image)

    # task = QueueTask(interview_id, face_image, time)
    # update_queue_task(task)
    return 'Success', 200

"""
This method should only be called once interview_status returns a 200 status code,
indicating that the interview images are done processing.
"""
@app.route('/v1/interview/sentiment/<interview_id>', methods=['GET'])
def interview_sentiment(interview_id):
    if interview_id not in queue_statuses:
        return 'Interview not found', 404
    
    interview_sentiment = data_rw.get_sentiment_data(interview_id)
    return interview_sentiment, 200
    

@app.route('/v1/queue/status/<interview_id>', methods=['GET'])
def interview_status(interview_id):
    if interview_id not in queue_statuses:
        return 'Interview not found', 500

    if queue_statuses[interview_id] == 'COMPLETED':
        return 'Completed', 200
    else:
        return 'Processing in progress', 404

@app.route('/v1/interview/event', methods=['POST'])
def assign_events():
    request_body = request.get_json()
    events: [Event] = [Event.from_json(event) for event in request_body['events']]
    data_rw.add_event_to_interview(request_body['interview_id'], events)
    return 'Added events!', 200

@app.route('/v1/interview/iframe', methods=['POST'])
def assign_iframe():
    request_body = request.get_json()
    iframe = request_body['iframe']
    interview_id = request_body['interview_id']
    data_rw.add_iframe_to_interview(interview_id, iframe)
    return f'Assigned iframe: {iframe}', 200

@app.route('/v1/interview/iframe/<interview_id>', methods=['GET'])
def get_iframe_by_interview_id(interview_id):
    iframe = data_rw.get_iframe_by_interview_id(interview_id)
    if not iframe:
        return f"Couldn't find iframe for interview {interview_id}", 400
    return iframe, 200

@app.route('/v1/interview/transcript/upload', methods=['POST'])
def process_transcript():
    request_body = request.get_json()
    vtt_text = request_body['text']
    interview_id = request_body['interview_id']

    data_rw.write_vtt(interview_id, vtt_text)
    text_events = []
    for caption in data_rw.read_vtt_to_captions(interview_id):
        text_event = TextEvent(caption.text.strip(), (caption.start, caption.end))
        sentiment: Sentiment = utils.classify_text(text_event)
        text_event.add_sentiment(sentiment)
        text_events.append(text_event)
    data_rw.add_text_events(interview_id, text_events)
    return "Text processed!", 200

def main():
    app.run(debug=True)
    # producer_thread = threading.Thread(target=producer)
    # consumer_thread = threading.Thread(target=consumer)
    # producer_thread.start()
    # consumer_thread.start()

if __name__ == '__main__':
    main()