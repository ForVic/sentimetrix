// src/InterviewerViews/ChooseInterviewTypeView.js

import React, { useState } from "react";
import InterviewChoiceComponent from "../InterviewerComponents/InterviewChoiceComponent";
import "./styles/ChooseInterviewTypeView.css";
import sentimetrixLogo from "../imgs/sentimetrix_logo.png";

function ChooseInterviewTypeView() {
  return (
    <div>
      <img
        className="sentimetrix-logo"
        src={sentimetrixLogo}
        alt="Sentimetrix"
      />
      <div className="section-wrapper">
        <InterviewChoiceComponent />
      </div>
    </div>
  );
}

export default ChooseInterviewTypeView;
