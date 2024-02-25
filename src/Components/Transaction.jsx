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
    <div className="max-w-[70%] p-8">
      <h2 className="text-2xl font-bold mb-4">Make a Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fromCurrency" className="block text-gray-700 mb-1">
            Currency From
          </label>
          <select
            id="fromCurrency"
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
        <div>
          <label htmlFor="toCurrency" className="block text-gray-700 mb-1">
            Currency To
          </label>
          <select
            id="toCurrency"
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
        <div>
          <label htmlFor="receiverAccount" className="block text-gray-700 mb-1">
            Receiver Account Number
          </label>
          <input
            type="text"
            id="receiverAccount"
            value={receiverAccount}
            onChange={handleReceiverAccountChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="receiverBank" className="block text-gray-700 mb-1">
            Receiver Bank
          </label>
          <input
            type="text"
            id="receiverBank"
            value={receiverBank}
            onChange={handleReceiverBankChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
