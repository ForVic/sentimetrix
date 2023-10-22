// src/InterviewerViews/ChooseInterviewTypeView.js

import React, { useState } from "react";
import InterviewChoiceComponent from "../InterviewerComponents/InterviewChoiceComponent";
import { Link, useNavigate } from "react-router-dom";

function ChooseInterviewTypeView() {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("");

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const handleNextClick = () => {
    if (selectedType) {
      navigate("/create-interview/" + selectedType);
    } else {
      // Handle the case where no type is selected
    }
  };

  return (
    <div>
      <h1>Choose Interview Type</h1>
      <InterviewChoiceComponent handleTypeSelection={handleTypeSelection} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default ChooseInterviewTypeView;
