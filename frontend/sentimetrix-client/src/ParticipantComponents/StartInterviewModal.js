// src/ParticipantComponents/StartInterviewModal.js

import React from "react";

function StartInterviewModal({ onStartInterview }) {
  return (
    <div className="start-modal">
      <h2>Welcome to the Interview</h2>
      <p>Basic info about the interview goes here...</p>
      <button onClick={onStartInterview}>Begin</button>
    </div>
  );
}

export default StartInterviewModal;
