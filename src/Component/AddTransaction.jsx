import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/ProviderContext';

function AddTransaction() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(UserContext); // Destructure addTransaction from UserContext

  const addExpense = () => {
    if (!expense || !amount) {
      alert("Please enter expense and amount")
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: expense,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setExpense('');
    setAmount('');
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-2 bg-white rounded-lg">
      <h4 className="text-xl font-semibold mb-4 underline">Add Transaction</h4>
      <div className="space-y-4">
        <label className="block text-gray-700">Enter Description</label>
        <input
          type="text"
          id="text"
          autocomplete="off"
          value={expense}
          placeholder="Enter Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          onChange={(e) => setExpense(e.target.value)}
        />
        <label className="block text-gray-700">
          Enter Amount
          <p className="text-sm text-gray-500">(negative - expense, positive - income)</p>
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          placeholder="Enter Amount"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-cyan-600"
          onClick={addExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}
export default AddTransaction ;