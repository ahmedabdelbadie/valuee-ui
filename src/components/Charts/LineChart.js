import React from "react";
import { Line } from "react-chartjs-2";
import { Filler } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(Filler);
const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales Data",
        data: [12, 19, 3, 5, 2, 3, 9],
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      sx={{ backgroundColor: "#000", "&::after": { backgroundColor: "#000" } }}
    >
      <Line data={data} options={options} />{" "}
    </div>
  );
};

export default LineChart;
