async function SetInterviewIframeFunction(interviewId, iframeString) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/v1/interview/iframe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        interview_id: interviewId,
        iframe: iframeString,
      }),
    });

    if (response.status === 200) {
      console.log("iFrame URL assigned to the interview successfully.");
      // You can perform further actions upon successful iFrame assignment
    } else {
      console.error(
        "Failed to assign iFrame URL to the interview:",
        response.statusText
      );
      // Handle error conditions as needed
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle network or other errors
  }
}

export default SetInterviewIframeFunction;
