import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//InterviewerClient Views
import ChooseInterviewTypeView from "./InterviewerViews/ChooseInterviewTypeView";
import CreateInterviewView from "./InterviewerViews/CreateInterviewView";
import InterviewInProgressView from "./InterviewerViews/InterviewInProgressView"; // Import InterviewInProgressView

//ParticipantClient Views

import InterviewScreen from "./ParticipantViews/InterviewScreen"; // Import InterviewScreen

// Import other views here (CreateInterviewView, etc.)

function App() {
  console.log("BYEE");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseInterviewTypeView />} />
        <Route
          path="/create-interview/:interviewType"
          element={<CreateInterviewView />}
        />
        <Route
          path="/interview-in-progress"
          element={<InterviewInProgressView />}
        />
        <Route path="/interview/:interviewId" element={<InterviewScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
