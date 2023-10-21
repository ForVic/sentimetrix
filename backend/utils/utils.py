import requests
import openai
import json


# wrapper around https://huggingface.co/dima806/facial_emotions_image_detection
def classify_image(image):
    """
    Classify facial expression using a serialized image and Hugging Face API.

    Args:
    - image (bytes): The serialized image.

    Returns:
    - dict: The response from the Hugging Face API (emotion classification).
    """

    # Make a POST request to the Hugging Face API
    headers = {"Authorization": "Bearer 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"}
    response = requests.post(
        "https://api-inference.huggingface.co/models/dima806/facial_emotions_image_detection",
        headers=headers,
        data=image,
    )

    # Return the API's response
    return response.json()


# wrapper around https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions
def classify_text(text):
    """
    Classify facial expression using a serialized image and Hugging Face API.

    Args:
    - image_bytes (bytes): The serialized image.

    Returns:
    - dict: The response from the Hugging Face API (emotion classification).
    """

    # Make a POST request to the Hugging Face API
    headers = {"Authorization": "Bearer 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"}
    payload = {
        "inputs": text,
    }

    response = requests.post(
        "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
        headers=headers,
        json=payload,
    )

    top_five = response.json()[0][0:5]

    # Return the API's response
    return top_five


def extract_task_start_times(vtt_string, tasks):
    # Initialize the OpenAI API client with your API key
    api_key = "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"
    openai.api_key = api_key

    tasks_string = ""

    for task in tasks:
        tasks_string += task + "\n"

    tasks_json_template = "{"
    for task in tasks:
        tasks_json_template += '"task": <mask>,'
    tasks_json_template += "}"

    prompt = f"Extract the start times from the following VTT string:\n {vtt_string}.\n Here are the tasks:\n {tasks_string}\n Map the tasks to the start times they occur and give an output format like so:\n {tasks_json_template}\n ONLY RESPOND IN THIS FORMAT, DON’T SEND ANY OTHER TEXT."

    # Use GPT-3.5 to get the start time
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt},
        ],
    )

    response_string = response.choices[0].message.content

    response_json = json.loads(response_string)

    return response_json
