import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("GHS");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [convertedAmount, setConvertedAmount] = useState(0);

const currencies = [
  { code: "GHS", name: "Ghana Cedis" },
  { code: "NGN", name: "Naira" },
  { code: "ZAR", name: "SA Rand" },
  { code: "KES", name: "Shilling" },
  { code: "EGP", name: "Pound" },
  // Add more African currencies here
];

  const convertCurrency = () => {
    // Perform currency conversion here (e.g., using an API)
    // For simplicity, let's just set the converted amount to a random value
    setConvertedAmount(Math.random() * 1000);
  };

  return (
    <div className="bg-white rounded-md px-6 py-8">
      <h2 className="text-2xl font-bold mb-8">Currency Converter</h2>
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
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
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
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
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
          Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
