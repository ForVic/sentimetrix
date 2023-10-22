// src/InterviewerComponents/UploadIframeComponent.js

import React, { useState } from "react";
import "./styles/iframe.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

function UploadIframeComponent({ iframeUrl, setIframeUrl }) {
  const handleIframeUpload = (e) => {
    setIframeUrl(e.target.value);
  };

  return (
    <div>
      <div className="insert-iframe-component">
        <div className="step-title">Step 2</div>
        <div className="insert-iframe-input">
          <div className="insert-iframe-title">Insert iFrame</div>
          <div className="info-icon-container">
            <AiOutlineInfoCircle />
            <span className="tooltiptext">
              {" "}
              Insert the full HTML tag for your iFrame
            </span>
          </div>
        </div>
        <textarea
          type="text"
          className="iframe-input"
          placeholder="Your iFrame tag here..."
          onChange={handleIframeUpload}
        />
      </div>
    </div>
  );
}

export default UploadIframeComponent;
