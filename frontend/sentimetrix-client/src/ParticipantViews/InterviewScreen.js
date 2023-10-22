// src/ParticipantViews/InterviewScreen.js

import React, { useState, useEffect } from "react";
import IframeComponent from "../ParticipantComponents/IframeComponent";
import StartInterviewModal from "../ParticipantComponents/StartInterviewModal";
import { useParams } from "react-router-dom"; // Import useParams
import { fetchIframe } from "../ParticipantFunctions/fetchIFrameFunction";

function InterviewScreen() {
  console.log("LOADED");
  const [isStartModalVisible, setStartModalVisible] = useState(true);
  const [isInterviewStarted, setInterviewStarted] = useState(false);
  const [iframeSource, setIframeSource] = useState("");

  const { interviewId } = useParams(); // Get interviewId from URL

    // Use useEffect to call the fetchIframe function
    useEffect(() => {
      async function fetchIframeWrapper() {
        try {
          const iframeString = await fetchIframe();
          setIframeSource(iframeString);
        } catch (error) {
          console.error("Error fetching iframeString:", error);
          // Handle error conditions as needed
        }
      }
  
      fetchIframeWrapper();
    }, []);



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
          <div dangerouslySetInnerHTML={{__html: iframeSource}} /> 
          <button onClick={handleEndInterview} disabled={!isInterviewStarted}>
            End Interview
          </button>
        </div>
      )}
    </div>
  );
}

export default InterviewScreen;
