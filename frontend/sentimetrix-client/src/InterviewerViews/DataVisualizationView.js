import { useParams } from "react-router-dom"; // Import useParams
import PolygonDataComponent from "../InterviewerComponents/PolygonDataComponent";
import "./styles/dataviz.css";
import React, { useEffect, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";

function DataVisualizationView() {
  const { interviewId } = useParams(); // Get interviewId from URL
  const [interview, setInterview] = useState({});
  const [sentiment, setSentiment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeInterval, setTimeInterval] = useState(0);

  useEffect(() => {
    let url = `http://127.0.0.1:5000/v1/interview/sentiment/${interviewId}`;
    setLoading(true);
    const fetchMock = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resp = await response.json();
      setInterview(resp);
      const curr = [...resp.images[timeInterval].sentiment];
      setSentiment(curr);
    };
    fetchMock();
    setLoading(false);
  }, [interviewId]);

  useEffect(() => {
    if (interview.images === undefined) {
      return;
    }
    const curr = [...interview.images[timeInterval].sentiment];
    console.log(interview);
    setSentiment(curr);
  }, [timeInterval]);

  const handleChangeTimeInterval = (e) => {
    let index = parseInt(e.target.value) - 1;
    if (index < interview.images.length && index >= 0) {
      setTimeInterval(index);
    }
  };

  return (
    <div>
      <h1>Results</h1>
      {loading || !interview.images || !sentiment ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Emotions at: {interview.images[timeInterval].time}</h1>
          <input
            type="number"
            placeholder="0"
            value={timeInterval + 1}
            onChange={handleChangeTimeInterval}
          />
          <div className="polygon-wrapper">
            <PolygonDataComponent input={sentiment} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DataVisualizationView;
