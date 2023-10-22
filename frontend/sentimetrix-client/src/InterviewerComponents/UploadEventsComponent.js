// src/InterviewerComponents/UploadEventsComponent.js
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

function UploadEventsComponent() {
  const [events, setEvents] = useState("");

  const handleEventsUpload = (e) => {
    setEvents(e.target.value);
  };

  return (
    <div>
      <div className="insert-iframe-component">
        <div className="step-title">Step 1</div>
        <div className="insert-iframe-input">
          <div className="insert-iframe-title">Create Timestamps</div>
          <div className="info-icon-container">
            <AiOutlineInfoCircle />
          </div>
        </div>
        <div className="step-title"></div>
      </div>
    </div>
  );
}

export default UploadEventsComponent;
