import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './Component/Navbar';
import Balance from './Component/Balance';
import IncomeExpense from './Component/IncomeExpense';
import History from './Component/History';
import ProviderContext from './Context/ProviderContext';
import AddTransaction from './Component/AddTransaction';
import Header from './Component/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProviderContext>
    <Navbar />
    <div className='flex flex-col justify-center items-center'>
      <div>
      <Header />
      </div>
      <div className='flex flex-col justify-center items-start  mb-2'>
        <Balance />
        <IncomeExpense />
      </div>
      <div>
        <AddTransaction />
        <History />
      </div>
    </div>
  </ProviderContext>
);


