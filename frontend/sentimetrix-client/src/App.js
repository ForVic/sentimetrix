import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseInterviewTypeView from "./InterviewerViews/ChooseInterviewTypeView";
import CreateInterviewView from "./InterviewerViews/CreateInterviewView";
import InterviewInProgressView from "./InterviewerViews/InterviewInProgressView"; // Import InterviewInProgressView

// Import other views here (CreateInterviewView, etc.)

function App() {
  console.log("BYEE");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseInterviewTypeView />} />
        <Route path="/create-interview" element={<CreateInterviewView />} />
        <Route
          path="/interview-in-progress"
          element={<InterviewInProgressView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
