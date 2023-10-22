async function GenerateInterviewIdFunction() {
  try {
    const response = await fetch("http://127.0.0.1:5000/v1/interview/start/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // You may need to adjust the content type
        // Add any other headers if required
      },
    });

    if (response.status === 200) {
      const interviewId = await response.text();
      console.log(`Interview started with ID: ${interviewId}`);
      return interviewId;
      // You can perform further actions with the interviewId here
    } else {
      console.error("Failed to start the interview:", response.statusText);
      // Handle error conditions as needed
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle network or other errors
  }
}

export default GenerateInterviewIdFunction;
