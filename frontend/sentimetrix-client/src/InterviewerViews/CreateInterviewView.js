// src/InterviewerViews/CreateInterviewView.js

import React from "react";
import UploadEventsComponent from "../InterviewerComponents/UploadEventsComponent";
import UploadIframeComponent from "../InterviewerComponents/UploadIframeComponent";
import ShareLinkComponent from "../InterviewerComponents/ShareLinkComponent";
import { Link, useParams } from "react-router-dom"; // Import Link for navigation

function CreateInterviewView() {
  const { interviewType } = useParams(); // Get interviewId from URL

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
      <ShareLinkComponent />

      {/* Next Button */}
      <Link to="/interview-in-progress">Next</Link>
    </div>
  );
}

export default CreateInterviewView;
