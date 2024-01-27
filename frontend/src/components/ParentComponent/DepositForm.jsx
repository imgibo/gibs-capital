import { useEffect, useState } from 'react'
import '../../styles/ParentComponent/depositForm.css'
import savingsService from '../../services/savings'

function DepositForm({ onHideDepositForm }) {
    const [depositName, setDepositName] = useState('');
    const [newDepositAmount, setDepositAmount] = useState('');

    const handleDepositNameChange = (e) => {
        const name = (e.target.value);
        setDepositName(name);
    }

    const handleDepositAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        setDepositAmount(amount);
    }

    const depositAmount = (e) => {
        e.preventDefault();

        const depositObject = {
            name: depositName,
            amount: newDepositAmount,
            isApproved: 'Deposit',
        };

        savingsService.depositAmount(depositObject).then((depositedAmount) => {
            onHideDepositForm();
        })
    }

  return (
    <>
    <div className="formContainer">
        {/* <div>
            <p>Deposit</p>
        </div> */}
        <form className="form-child" onSubmit={depositAmount}>
            <p>Account Name</p>
            <input type="text" value={depositName} onChange={handleDepositNameChange}/>
            <p>Amount</p>
            <input type="number" placeholder='0.00' value={newDepositAmount} onChange={handleDepositAmountChange}/>
            <button type='submit' >Deposit</button>
        </form>
    </div>
    </>
  )
}

export default DepositForm;