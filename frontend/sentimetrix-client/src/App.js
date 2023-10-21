import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseInterviewTypeView from "./InterviewerViews/ChooseInterviewTypeView";
// Import other views here (CreateInterviewView, etc.)

function App() {
  console.log("BYEE");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseInterviewTypeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
