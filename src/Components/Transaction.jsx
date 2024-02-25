// TransactionPage.js

import React, { useState } from "react";

const Transaction = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [receiverAccount, setReceiverAccount] = useState("");
  const [receiverBank, setReceiverBank] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleReceiverAccountChange = (e) => {
    setReceiverAccount(e.target.value);
  };

  const handleReceiverBankChange = (e) => {
    setReceiverBank(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle transaction logic here
  };

  return (
    <div className="container mx-10 mt-8">
      <h2 className="text-2xl font-bold mb-4">Make a Transaction</h2>
      <form onSubmit={handleSubmit} className="max-w-[70%]">
        <div className="mb-4">
          <label
            htmlFor="fromCurrency"
            className="block text-sm font-medium text-gray-700"
          >
            Currency From
          </label>
          <select
            id="fromCurrency"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="">Select Country</option>
            <option value="NGN">Nigeria (NGN)</option>
            <option value="ZAR">South Africa (ZAR)</option>
            <option value="KES">Kenya (KES)</option>
            <option value="GHS">Ghana (GHS)</option>
            <option value="EGP">Egypt (EGP)</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="toCurrency"
            className="block text-sm font-medium text-gray-700"
          >
            Currency To 
          </label>
          <select
            id="toCurrency"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="">Select Country</option>
            <option value="NGN">Nigeria (NGN)</option>
            <option value="ZAR">South Africa (ZAR)</option>
            <option value="KES">Kenya (KES)</option>
            <option value="GHS">Ghana (GHS)</option>
            <option value="EGP">Egypt (EGP)</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="receiverAccount"
            className="block text-sm font-medium text-gray-700"
          >
            Receiver Account Number
          </label>
          <input
            type="text"
            id="receiverAccount"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={receiverAccount}
            onChange={handleReceiverAccountChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="receiverBank"
            className="block text-sm font-medium text-gray-700"
          >
            Receiver Bank
          </label>
          <input
            type="text"
            id="receiverBank"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={receiverBank}
            onChange={handleReceiverBankChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
