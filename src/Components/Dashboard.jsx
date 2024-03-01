import React, { useState } from "react";
import {
  RiArrowUpDownLine,
  RiExchangeDollarLine,
  RiFileTransferLine,
} from "react-icons/ri";
import { FaExclamationTriangle } from "react-icons/fa";
import MainCard from "./MainCard";
import Chart from "react-apexcharts";
import CurrencyConverter from "./Conversion";

const Dashboard = () => {
  const [isUnavailableClicked, setIsUnavailableClicked] = useState(false);

  const handleMainCardClick = () => {
    setIsUnavailableClicked(true);
    setTimeout(() => {
      setIsUnavailableClicked(false);
    }, 3000); // Hide notification after 3 seconds
  };


  const currencyChartData = {
    series: [
      { name: "NGN", data: [100, 200, 150, 300, 250] },
      { name: "USD", data: [120, 180, 140, 280, 220] },
      // Add more currencies here
    ],
    options: {
      chart: { height: 350, type: "line", toolbar: { show: false } },
      colors: ["#008FFB", "#00E396"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"] },
      markers: { size: 0 },
      legend: { position: "top" },
    },
  };

  return (
    <main className="mx-8 py-12 relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <MainCard
          title="Deposit"
          icon={<RiArrowUpDownLine />}
          color="bg-green-500 text-white"
          onClick={handleMainCardClick}
        />
        <MainCard
          title="Withdraw"
          icon={<RiArrowUpDownLine />}
          color="bg-yellow-500 text-white"
          onClick={handleMainCardClick}
        />
        <MainCard
          title="Transfer"
          icon={<RiFileTransferLine />}
          color="bg-blue-500 text-white"
          onClick={handleMainCardClick}
        />
        <MainCard
          title="Exchange"
          icon={<RiExchangeDollarLine />}
          color="bg-orange-500 text-white"
          onClick={handleMainCardClick}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        <CurrencyConverter />
        <div className="bg-white rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Currency Chart</h2>
          <Chart
            options={currencyChartData.options}
            series={currencyChartData.series}
            type="line"
            height={300}
          />
        </div>
      </div>

      {isUnavailableClicked && (
        <div className="fixed top-40 right-8 p-4 bg-red-50 shadow-md rounded-md transition-all z-10 duration-500">
          <div className="flex gap-4 items-center justify-between">
            <FaExclamationTriangle className="text-red-400 text-4xl" />
            <div>
              <h2 className="text-lg font-semibold ">Attention</h2>
              <p>
                Verify your identity <br />
                to make a transaction.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
