// src/InterviewerComponents/UploadEventsComponent.js

import React, { useState } from "react";

function UploadEventsComponent() {
  const [events, setEvents] = useState("");

  const handleEventsUpload = (e) => {
    setEvents(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Upload events here..."
        value={events}
        onChange={handleEventsUpload}
      />
    </div>
  );
}

export default UploadEventsComponent;
