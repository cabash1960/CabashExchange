// SelectCurrency.js
import React from "react";

const SelectCurrency = ({ selectedCurrency, onChangeCurrency }) => {
  const currencies = ["NGN", "GHS", "USD"];

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onChangeCurrency(e.target.value)}
      className="border p-2"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default SelectCurrency;
