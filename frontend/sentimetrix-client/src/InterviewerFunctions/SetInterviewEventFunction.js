async function setInterviewEventFunction(interviewId, events) {
  try {
    const response = await fetch("http://127.0.0.1:5000/v1/interview/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        interview_id: interviewId,
        events: events,
      }),
    });

    if (response.status === 200) {
      console.log("Events added to the interview successfully.");
      // You can perform further actions upon successful event addition
    } else {
      console.error(
        "Failed to add events to the interview:",
        response.statusText
      );
      // Handle error conditions as needed
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle network or other errors
  }
}

export default setInterviewEventFunction;
