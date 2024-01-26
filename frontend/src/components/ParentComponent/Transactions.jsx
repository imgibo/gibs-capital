import { useEffect, useState } from 'react'
import '../../styles/ParentComponent/transactions.css'
import savingsService from '../../services/savings'

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [depositName, setDepositName] = useState('');
    const [newDepositAmount, setDepositAmount] = useState(0);
    const [withdrawName, setWithdrawName] = useState('');
    const [newWithdrawAmount, setWithdrawAmount] = useState(0);

    useEffect(() => {
        savingsService.getSavings().then((initialData) => setTransactions(initialData));
    }, []);

    const sortedTransactions = transactions.slice().sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    const recentTransactions = sortedTransactions.slice(0, 5);

    const handleDepositNameChange = (e) => {
        const name = (e.target.value);
        setDepositName(name);
    }

    const handleDepositAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        setDepositAmount(amount);
    }

    const handleWithdrawNameChange = (e) => {
        const name = (e.target.value);
        setWithdrawName(name);
    }

    const handleWithdrawAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        setWithdrawAmount(amount);
    }

    const depositAmount = (e) => {
        e.preventDefault();

        const depositObject = {
            name: depositName,
            amount: newDepositAmount,
            isApproved: 'Deposit',
        };

        savingsService.depositAmount(depositObject).then((depositedAmount) => {
            setTransactions(transactions.concat(depositedAmount));
            setDepositName('');
            setDepositAmount(0);
        })
    }

    const withdrawAmount = (e) => {
        e.preventDefault();

        const withdrawObject = {
            name: withdrawName,
            amount: newWithdrawAmount,
            isApproved: 'Withdraw',
        };

        savingsService.withdrawAmount(withdrawObject).then((withdrawnAmount) => {
            setTransactions(transactions.concat(withdrawnAmount));
            setWithdrawName('');
            setWithdrawAmount(0);
        })
    }

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
        <form className="transaction-card" onSubmit={depositAmount}>
            <input type="text" value={depositName} onChange={handleDepositNameChange}/>
            <input type="number" value={newDepositAmount} onChange={handleDepositAmountChange}/>
            <button type='submit' >Deposit</button>
        </form>
        <form className="transaction-card" onSubmit={withdrawAmount}>
            <input type="text" value={withdrawName} onChange={handleWithdrawNameChange}/>
            <input type="number" value={newWithdrawAmount} onChange={handleWithdrawAmountChange}/>
            <button type='submit' >Withdraw</button>
        </form>

    </div>
  )
}

export default Transactions;