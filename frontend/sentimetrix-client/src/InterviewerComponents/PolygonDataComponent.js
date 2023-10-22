import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function PolygonDataComponent({ input }) {
  let labels = input?.map((d) => d.label);
  let scores = input?.map((d) => d.score);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Emotions",
        data: scores,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Radar data={data} />
    </>
  );
}
export default PolygonDataComponent;
