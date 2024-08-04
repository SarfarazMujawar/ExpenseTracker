import React, { useContext } from 'react'
import { UserContext } from '../Context/ProviderContext'




function History() {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };
  const {transactions,deleteTransaction} = useContext(UserContext);
  console.log(transactions)
   

  return (
<div className="max-w-md mx-auto mt-2 p-2 bg-white rounded-lg ">
  <h4 className="text-xl font-semibold mb-4 underline">History</h4>
  <ul className="space-y-2">
    {transactions.map((element) => (
      <li
        key={element.id}
        className={`flex items-center justify-between p-1 border rounded-md relative ${
          element.amount >= 0 ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
        }`}
      >
        <div className="flex-1 flex items-center justify-between">
          <span className="font-medium">{element.text}</span>
          <span className={`font-bold ml-4 ${element.amount >= 0 ? 'text-green-700' : 'text-red-700'}`}>{formatAmount(element.amount)}</span>
        </div>
        <button
          onClick={() => deleteTransaction(element.id)}
          className="ml-4 p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform duration-300 transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </li>
    ))}
  </ul>
</div>







  

  
  )
}

export default History
