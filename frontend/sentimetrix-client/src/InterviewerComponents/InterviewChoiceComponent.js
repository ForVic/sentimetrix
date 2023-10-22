// src/InterviewerComponents/InterviewChoiceComponent.js

import React, { useState } from "react";

function InterviewChoiceComponent({ handleTypeSelection }) {
  const [selectedType, setSelectedType] = useState("");

  const handleLoclaTypeSelection = (type) => {
    setSelectedType(type);
    handleTypeSelection(type);
  };

  return (
    <div>
      <h2>Select Interview Type:</h2>
      <button onClick={() => handleLoclaTypeSelection("video-screening")}>
        Video Screening
      </button>
      <button onClick={() => handleLoclaTypeSelection("task-analysis")}>
        Task Analysis
      </button>
      {selectedType && <p>Selected: {selectedType}</p>}
    </div>
  );
}

export default InterviewChoiceComponent;
