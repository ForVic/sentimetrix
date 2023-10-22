// src/InterviewerComponents/ShareLinkComponent.js

import React from "react";

function ShareLinkComponent({ interview_id }) {
  // Dummy interview link (you can replace this with your generated link)
  const interviewLink = "http://localhost:3000/interview/" + interview_id;

  const handleCopyLink = () => {
    // Logic to copy the link to the clipboard (you can implement this)
    navigator.clipboard.writeText(interviewLink);
  };

  return (
    <div>
      <p>Interview Link:</p>
      <div>{interviewLink}</div>
      <button onClick={handleCopyLink}>Copy Link</button>
    </div>
  );
}

export default ShareLinkComponent;
