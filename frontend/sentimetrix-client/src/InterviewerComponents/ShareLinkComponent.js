// src/InterviewerComponents/ShareLinkComponent.js

import React from "react";

function ShareLinkComponent() {
  // Dummy interview link (you can replace this with your generated link)
  const interviewLink = "https://example.com/interview/123456";

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
