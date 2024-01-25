import { useEffect, useState } from 'react'
import '../../styles/ParentComponent/transactions.css'
import axios from 'axios'

function Transactions() {

    const baseUrl = "http://localhost:3001/savings";
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getTransactions = async () => {
            const res = await axios.get(baseUrl);
            console.log(res.data);
            setTransactions(res.data);
        };

        getTransactions();
    }, []);

  return (
    <div className="sixthRow">
        <div>
            <p>Transaction</p>
            <p>See all</p>
        </div>
        <ul>
            {transactions.map((transaction) => (
               <li class="transaction-card" key={transaction.id}>
                    <div className="trans-icon">
                        <i className='bx bxs-arrow-to-bottom'></i>
                    </div>
                    <div>
                        <p className="trans-name">{transaction.name}</p>
                        <p className="trans-date">29 Sep 2023, 14:02</p>
                    </div>
                    <div class="deposit">
                        <p class="trans-amount">{transaction.amount}</p>
                        <p class="trans-status">Completed</p>
                    </div>
               </li>
            ))}
        </ul>

    </div>
  )
}

export default Transactions;