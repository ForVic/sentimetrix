// src/InterviewerComponents/UploadEventsComponent.js
import React, { useState } from "react";
import "./styles/events.css";
import { AiOutlineInfoCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function UploadEventsComponent({ events, setEvents }) {
  const [currEvent, setCurrEvent] = useState("");
  const [currTimestamp, setCurrTimestamp] = useState("");

  const handleAddEvent = () => {
    if (currEvent === "" || currTimestamp === "") {
      return;
    }
    if (events === undefined) {
      setEvents([]);
    }
    let newEvents = events.concat([
      { event_name: currEvent, timestamp: currTimestamp },
    ]);
    setEvents(newEvents);
    setCurrEvent("");
    setCurrTimestamp("");
  };

  const handleEditCurrEvent = (e) => {
    setCurrEvent(e.target.value);
  };

  const handleEditCurrTimestamp = (e) => {
    setCurrTimestamp(e.target.value);
  };

  const handleDelete = (index) => {
    let arr = [...events];
    arr.splice(index, 1);
    setEvents(arr);
  };

  return (
    <div>
      <div>
        <div className="insert-iframe-component">
          <div className="step-title">Step 1</div>
          <div className="insert-event-input">
            <div className="insert-iframe-title">Create Timestamps</div>
            <div className="info-icon-container">
              <AiOutlineInfoCircle />
              <span className="tooltiptext">
                {" "}
                Indicate the timestamp for the events in your interview
              </span>
            </div>
          </div>
          <div className="insert-event-input">
            <div className="step-title">Event Name</div>
            <div className="step-title">Timestamp</div>
            <div className="step-title"></div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        {events?.map((event, index) => {
          return (
            <div className="event-timestamp-container">
              <div className="insert-event-input">
                <div className="event-timestamp-title">{event.event_name}</div>
                <div className="event-timestamp-title">{event.timestamp}</div>
                <BsTrash onClick={() => handleDelete(index)} />
              </div>
              <div className="horizontal-line-nested"></div>
            </div>
          );
        })}
        <div className="event-input-button-container">
          <input
            className="event-input"
            type="text"
            placeholder="Event name..."
            onChange={handleEditCurrEvent}
            value={currEvent}
          />
          <input
            className="event-input"
            type="text"
            placeholder="Timestamp (MM:SS)..."
            onChange={handleEditCurrTimestamp}
            value={currTimestamp}
          />
          <button onClick={handleAddEvent} className="event-button">
            <span>
              <AiOutlinePlusCircle />
              Add Event
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadEventsComponent;
