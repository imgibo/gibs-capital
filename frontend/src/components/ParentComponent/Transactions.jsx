import { useEffect, useState } from 'react'
import '../../styles/ParentComponent/transactions.css'
import savingsService from '../../services/savings'

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        savingsService.getSavings().then((initialData) => setTransactions(initialData));
    }, []);

    const sortedTransactions = transactions.slice().sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    const recentTransactions = sortedTransactions.slice(0, 5);

  return (
    <div className="sixthRow">
        <div>
            <p>Transaction</p>
            <p>See all</p>
        </div>
        <ul>
            {recentTransactions.map((transaction) => (
               <li className="transaction-card" key={transaction.id}>
                    <div className="trans-icon">
                        <i className='bx bxs-arrow-to-bottom'></i>
                    </div>
                    <div>
                        <p className="trans-name">{transaction.name}</p>
                        <p className="trans-date">{transaction.timestamp}</p>
                    </div>
                    <div className="deposit">
                        <p className="trans-amount">Php {transaction.amount}</p>
                        <p className="trans-status">{transaction.isApproved}</p>
                    </div>
               </li>
            ))}
        </ul>
    </div>
  )
}

export default Transactions;