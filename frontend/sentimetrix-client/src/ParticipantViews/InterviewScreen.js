// src/ParticipantViews/InterviewScreen.js

import React, { useState } from "react";
import IframeComponent from "../ParticipantComponents/IframeComponent";
import StartInterviewModal from "../ParticipantComponents/StartInterviewModal";
import { useParams } from "react-router-dom"; // Import useParams

function InterviewScreen() {
  console.log("LOADED");
  const [isStartModalVisible, setStartModalVisible] = useState(true);
  const [isInterviewStarted, setInterviewStarted] = useState(false);

  const { interviewId } = useParams(); // Get interviewId from URL

  const handleStartInterview = () => {
    setStartModalVisible(false);
    setInterviewStarted(true);
  };

  const handleEndInterview = () => {
    // Logic to end the interview (you can implement this)
  };

  return (
    //Currently this is implemented so it swithces between the start interview modal
    // and the interview screen itself, but in Selenas desing the modal
    // is more of an overlay
    <div>
      {/* Start Modal */}
      {isStartModalVisible && (
        <StartInterviewModal onStartInterview={handleStartInterview} />
      )}

      {/* Interview Screen */}
      {isInterviewStarted && (
        <div>
          <h1>Interview Screen</h1>
          <IframeComponent />
          <button onClick={handleEndInterview} disabled={!isInterviewStarted}>
            End Interview
          </button>
        </div>
      )}
    </div>
  );
}

export default InterviewScreen;
