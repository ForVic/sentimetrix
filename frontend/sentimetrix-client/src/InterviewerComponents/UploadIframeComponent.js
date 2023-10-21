// src/InterviewerComponents/UploadIframeComponent.js

import React, { useState } from "react";

function UploadIframeComponent() {
  const [iframeUrl, setIframeUrl] = useState("");

  const handleIframeUpload = (e) => {
    setIframeUrl(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Upload iframe URL here..."
        value={iframeUrl}
        onChange={handleIframeUpload}
      />
    </div>
  );
}

export default UploadIframeComponent;
