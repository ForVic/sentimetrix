// src/InterviewerComponents/InterviewChoiceComponent.js

import React, { useState } from "react";

function InterviewChoiceComponent() {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h2>Select Interview Type:</h2>
      <button onClick={() => handleTypeSelection("VideoScreening")}>
        Video Screening
      </button>
      <button onClick={() => handleTypeSelection("TaskAnalysis")}>
        Task Analysis
      </button>
      {selectedType && <p>Selected: {selectedType}</p>}
    </div>
  );
}

export default InterviewChoiceComponent;
