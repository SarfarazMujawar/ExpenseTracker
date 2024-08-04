import React, { useContext } from 'react'
import {UserContext} from '../Context/ProviderContext'

function IncomeExpense() 
{

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const {transactions} = useContext(UserContext);
  console.log(transactions)
   //Extracting amount from transactions object
  const amount = transactions.map(element=>element.amount)

  //extracting and summing positive number

  const income = amount.filter(ele=>ele>0).reduce((acc,ele)=>(acc+=ele),0);
  console.log("income :" + income)

  const expense = amount.filter(ele=>ele<0).reduce((acc,ele)=>(acc+=ele),0)*-1;
  console.log("expense :" + expense)
  return (

    <div className="max-w-md  ml-0 mt-1 p-2 bg-white shadow-lg rounded-lg grid grid-cols-2 gap-4">
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md">
      <h4 className="text-sm font-semibold">INCOME</h4>
      <p className="text-xl font-bold">{formatAmount(income)}</p>
    </div>
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
      <h4 className="text-sm font-semibold">EXPENSE</h4>
      <p className="text-xl font-bold">{formatAmount(expense)}</p>
    </div>
  </div>
  
  )
}

export default IncomeExpense
