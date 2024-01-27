import { useEffect, useState } from 'react'
import '../../styles/ParentComponent/depositForm.css'
import savingsService from '../../services/savings'

function WithdrawForm({ onHideWithdrawForm }) {
    const [withdrawName, setWithdrawName] = useState('');
    const [newWithdrawAmount, setWithdrawAmount] = useState(0);

    const handleWithdrawNameChange = (e) => {
        const name = (e.target.value);
        setWithdrawName(name);
    }

    const handleWithdrawAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        setWithdrawAmount(amount);
    }

    const withdrawAmount = (e) => {
        e.preventDefault();

        const withdrawObject = {
            name: withdrawName,
            amount: newWithdrawAmount,
            isApproved: 'Withdraw',
        };

        savingsService.withdrawAmount(withdrawObject).then((withdrawnAmount) => {
            onHideWithdrawForm();
        })
    }

  return (
    <>
    <div className="formContainer">
        {/* <div>
            <p>Deposit</p>
        </div> */}
        <form className="form-child" onSubmit={withdrawAmount}>
            <p>Account Name</p>
            <input type="text" value={withdrawName} onChange={handleWithdrawNameChange}/>
            <p>Amount</p>
            <input type="number" placeholder='0.00' value={newWithdrawAmount} onChange={handleWithdrawAmountChange}/>
            <button type='submit' >Withdraw</button>
        </form>
    </div>
    </>
  )
}

export default WithdrawForm;