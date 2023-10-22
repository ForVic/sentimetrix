// src/InterviewerComponents/InterviewChoiceComponent.js

import React, { useState } from "react";
import "./styles/InterviewChoiceComponent.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

function InterviewChoiceComponent() {
  const navigate = useNavigate();

  const handleLocalTypeSelection = (selectedType) => {
    navigate("/create-interview/" + selectedType);
  };

  return (
    <div>
      <h2 className={"title"}>Select type of study to set up:</h2>
      <div className="interview-choice-container ">
        {/* Video Screening Card */}
        <div className="interview-card">
          <h3>Video Screening</h3>
          <p>Conduct video-based interviews with candidates.</p>
          <div className="platforms-row">
            <div className="platform-box">Platform 1</div>
            <div className="platform-box">Platform 2</div>
            <div className="platform-box">Platform 3</div>
          </div>
          <button onClick={() => handleLocalTypeSelection("video-screening")}>
            Select
          </button>
        </div>

        {/* Task Analysis Card */}
        <div className="interview-card">
          <h3>Task Analysis</h3>
          <p>Conduct task-oriented interviews with candidates.</p>
          <div className="platforms-row">
            <div className="platform-box">Platform 1</div>
            <div className="platform-box">Platform 2</div>
            <div className="platform-box">Platform 3</div>
          </div>
          <button onClick={() => handleLocalTypeSelection("task-analysis")}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewChoiceComponent;
