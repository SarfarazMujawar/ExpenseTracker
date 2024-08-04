import React, { useContext } from 'react'
import { UserContext } from '../Context/ProviderContext'
function Balance() {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  
  const {transactions} = useContext(UserContext);
  const amount = transactions.map(ele=>ele.amount);

  const balance = amount.reduce((acc,ele)=>(acc+=ele),0)
  return (
    <div className='max-w-md   bg-white  rounded-lg  '>
      <h4 className='text-base text-gray-600  '>Your Balance</h4>
      <h1 className='text-3xl font-bold text-gray-900	'>{formatAmount(balance)}</h1>
    </div>
  )
}

export default Balance
