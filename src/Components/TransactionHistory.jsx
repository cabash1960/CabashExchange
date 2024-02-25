
import React, { useState } from "react";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2024-02-25",
      receiver: "Jane Smith",
      amount: 1000,
      currency: "NGN",
    },
    {
      id: 2,
      date: "2024-02-24",
      receiver: "Bob Williams",
      amount: 500,
      currency: "ZAR",
    },
  ]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Receiver</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-4 py-2 border">{transaction.date}</td>
                <td className="px-4 py-2 border">{transaction.receiver}</td>
                <td className="px-4 py-2 border">{transaction.amount}</td>
                <td className="px-4 py-2 border">{transaction.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
