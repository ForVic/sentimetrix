// src/InterviewerViews/InterviewInProgressView.js
import ShareLinkComponent from "../InterviewerComponents/ShareLinkComponent";
import { useParams } from "react-router-dom"; // Import useParams

import React from "react";

function InterviewInProgressView() {
  const { interviewId } = useParams(); // Get interviewId from URL

  return (
    <div>
      <h1>Interview in Progress</h1>
      {/* Add content for the Interview in Progress view */}
      {/* Share Link Component */}
      <h2>Share Interview Link</h2>
      <ShareLinkComponent interview_id={interviewId} />
    </div>
  );
}

export default InterviewInProgressView;
