import React, { createContext, useState,useEffect } from 'react';


const UserContext = createContext();

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

function ProviderContext({ children }) {
    const [transactions, setTransactions] = useState(initialState.transactions);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
      }, [transactions]);
    

    function addTransaction(newTransaction) {
        setTransactions([...transactions, newTransaction]);
        console.log(newTransaction);
    }
    function deleteTransaction(id){
        setTransactions(transactions.filter((e)=>
            id!==e.id
        ))
    }

    return (
        <UserContext.Provider value={{ addTransaction, transactions,deleteTransaction }}>
            {children}
        </UserContext.Provider>
    );
}

export default ProviderContext;
export { UserContext };