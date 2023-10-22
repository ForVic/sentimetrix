// src/InterviewerViews/CreateInterviewView.js

import React, { useState, useEffect } from "react";
import UploadEventsComponent from "../InterviewerComponents/UploadEventsComponent";
import UploadIframeComponent from "../InterviewerComponents/UploadIframeComponent";
import ShareLinkComponent from "../InterviewerComponents/ShareLinkComponent";
import { Link, useParams } from "react-router-dom"; // Import Link for navigation

import GenerateInterviewIdFunction from "../InterviewerFunctions/GenerateInterviewIdFunction";

const CreateInterviewView = () => {
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
  return (
    <div>
      <h1>Create Interview</h1>

      {/* Upload Events Component */}
      <h2>Upload Events</h2>
      <UploadEventsComponent />

      {/* Upload Iframe Component */}
      <h2>Upload Iframe</h2>
      <UploadIframeComponent />

      {/* Share Link Component */}
      <h2>Share Interview Link</h2>
      <ShareLinkComponent interview_id={interview_id} />

      {/* Next Button */}
      <Link to="/interview-in-progress">Next</Link>
    </div>
  );
};

export default CreateInterviewView;
