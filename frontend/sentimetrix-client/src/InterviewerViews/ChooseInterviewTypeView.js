// src/InterviewerViews/ChooseInterviewTypeView.js

import React from "react";
import InterviewChoiceComponent from "../InterviewerComponents/InterviewChoiceComponent";
import { Link } from "react-router-dom";

function ChooseInterviewTypeView() {
  return (
    <div>
      <h1>Choose Interview Type</h1>
      <InterviewChoiceComponent />
      <Link to="/create-interview">Next</Link>
    </div>
  );
}

export default ChooseInterviewTypeView;
