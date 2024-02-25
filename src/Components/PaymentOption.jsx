// PaymentOption.js
import React from "react";

const PaymentOption = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Payment Options</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 flex items-center justify-center rounded-lg">
          <span className="text-4xl">📱</span>
          <p className="ml-2">Mobile Recharge</p>
        </div>
        <div className="border p-4 flex items-center justify-center rounded-lg">
          <span className="text-4xl">💰</span>
          <p className="ml-2">Crypto Payment</p>
        </div>
        <div className="border p-4 flex items-center justify-center rounded-lg">
          <span className="text-4xl">🎉</span>
          <p className="ml-2">Event Management</p>
        </div>
        {/* Add more payment options as needed */}
      </div>
    </div>
  );
};

export default PaymentOption;
