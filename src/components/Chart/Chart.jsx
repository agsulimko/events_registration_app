import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import ChartJS from "chart.js/auto";

const Chart = ({ data }) => {
  const chartData = {
    labels: ["Amount of registrations"],
    datasets: [
      {
        label: "Number of Participants",
        data: [data],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  // console.log(ChartJS);
  return <Bar data={chartData} />;
};

export default Chart;

// ============================================
// Slineal Chart
// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Chart = ({ data }) => {
//   const chartData = {
//     labels: ["Amount of registrations"], // Метка для оси X
//     datasets: [
//       {
//         label: "Number of Participants", // Метка для легенды
//         data: [data], // Передаем массив данных с одним элементом
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//       },
//     ],
//   };

//   return <Line data={chartData} />;
// };

// export default Chart;
