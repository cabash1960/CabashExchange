import React, { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencies = [
    { name: "GHANA", logo: "GH₵" },
    { name: "NIGERIA", logo: "₦" },
    { name: "SOUTH_AFRICA", logo: "R" },
    { name: "EGYPT", logo: "E£" },
    { name: "BENIN", logo: "CFA" },
    { name: "MALI", logo: "CFA" },
    { name: "NIGER", logo: "CFA" }, 
    { name: "SENEGAL", logo: "CFA" },
    { name: "TOGO", logo: "CFA" }, 
  ];

  const convertCurrency = () => {
    const formData = {
      to: toCurrency,
      from: fromCurrency,
      amount: amount,
    };
    console.log(formData);
    axios
      .post(
        "https://mimi-ihak.onrender.com/api/v1/currencies/convert-currency/",
        formData
      )
      .then((response) => {
        console.log("Response data:", response.data);
        setConvertedAmount(response.data["converted amount"]);
      })

      .catch((error) => {
        console.log("Error converting currency:", error);
      });
  };

  return (
    <div className="bg-white flex justify-center items-center rounded-md px-6 h-96 mt-10 py-4">
      <div>
      <h2 className="text-2xl font-medium mb-4">Africa Conversion</h2>
      <div className=" items-center mb-4">
        <input
          type="number"
          className="border border-gray-300 rounded-md p-3 w-fit text-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          />
        <div className="flex items-center my-6">
          <select
            className="border border-gray-300 rounded-md p-3 w-full md:w-auto mt-4 md:mt-0 text-lg focus:outline-none focus:border-blue-500"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.logo} {currency.name}
              </option>
            ))}
          </select>
          <span className="text-2xl mx-4 md:mx-6 my-4 md:my-0">to</span>
          <select
            className="border border-gray-300 rounded-md p-3 w-full md:w-auto mt-4 md:mt-0 text-lg focus:outline-none focus:border-blue-500"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.logo} {currency.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          onClick={convertCurrency}
          >
          Convert
        </button>
      </div>
      <div>
        <p className="text-2xl">
          Converted Amount:{" "}
          {currencies.find((currency) => currency.name === toCurrency)?.logo}{" "}
          {convertedAmount.toFixed(2)}
        </p>
      </div>
          </div>
    </div>
  );
};

export default CurrencyConverter;
