import React from "react";
import ApexCharts from "react-apexcharts";

const ChartCard = ({ title, chartId, chartData }) => (
  <div className="border rounded shadow-md p-4 bg-white mt-10">
    <p className="text-center text-lg font-semibold">{title}</p>
    <div id={chartId}>
      <ApexCharts
        options={chartData}
        series={chartData.series}
        type={chartData.chart.type}
        height={chartData.chart.height}
      />
    </div>
  </div>
);

export default ChartCard;
