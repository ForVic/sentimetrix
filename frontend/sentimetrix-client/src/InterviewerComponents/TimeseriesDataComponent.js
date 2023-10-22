import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Timeseries",
    },
    tooltip: {
      enabled: true,
    },
  },
};

function TimeseriesDataComponent({ input }) {
  const images = input.images;
  const lab = images.map((image) => image.time);
  const sentiments = images[0].sentiment.map((sentiment) => sentiment.label);
  console.log(sentiments);
  const data = {
    labels: lab,
    datasets: sentiments.map((sentiment) => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let borderColor = `rgb(${red}, ${green}, ${blue}, 0.5)`;
      let timestamp_score = lab.map(
        (l) =>
          images
            .find((image) => {
              return image.time === l;
            })
            .sentiment.find((s) => {
              return s.label === sentiment;
            }).score
      );
      return {
        label: sentiment,
        data: timestamp_score,
        borderColor: borderColor,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      };
    }),
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
export default TimeseriesDataComponent;
