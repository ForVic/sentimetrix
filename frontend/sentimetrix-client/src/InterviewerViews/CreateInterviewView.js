// src/InterviewerViews/CreateInterviewView.js

import React, { useState, useEffect } from "react";
import UploadEventsComponent from "../InterviewerComponents/UploadEventsComponent";
import UploadIframeComponent from "../InterviewerComponents/UploadIframeComponent";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import Link for navigation

import GenerateInterviewIdFunction from "../InterviewerFunctions/GenerateInterviewIdFunction";
import setInterviewIframeFunction from "../InterviewerFunctions/SetInterviewIframeFunction";
import setInterviewEventFunction from "../InterviewerFunctions/SetInterviewEventFunction";

const CreateInterviewView = () => {
  const navigate = useNavigate();
  const { interviewType } = useParams(); // Get interviewId from URL
  const [interview_id, setInterviewId] = useState(null);

  // Use useEffect to call the GenerateInterviewIdFunction
  useEffect(() => {
    async function fetchInterviewId() {
      try {
        const id = await GenerateInterviewIdFunction();
        setInterviewId(id);
      } catch (error) {
        console.error("Error fetching interview ID:", error);
        // Handle error conditions as needed
      }
    }

    fetchInterviewId();
  }, []);

  // Function to handle the "Next" button click
  const handleNextClick = async () => {
    try {
      // Call your setInterviewIframeFunction and setInterviewEventFunction here
      // Pass the interview_id and relevant data (iframeString and events) as arguments
      const iframeString = '<iframe ="https://www.w3schools.com"></iframe>';
      const events = "your events data here";
      await setInterviewIframeFunction(interview_id, iframeString);
      await setInterviewEventFunction(interview_id, events);

      // After calling the functions, navigate to the next page
      navigate("/interview-in-progress/" + interview_id);
    } catch (error) {
      console.error("Error setting iframe and events:", error);
      // Handle error conditions as needed
    }
  };

  return (
    <div>
      <h1>Create Interview</h1>

      {/* Upload Events Component */}
      <h2>Upload Events</h2>
      <UploadEventsComponent />

      {/* Upload Iframe Component */}
      <h2>Upload Iframe</h2>
      <UploadIframeComponent />

      {/* Next Button */}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default CreateInterviewView;
