import React from 'react'
import { useState } from 'react'
import QuickLoanButton from '../../components/ui/QuickLoanButton'
import '../../styles/ParentComponent/homeContent.css'
import Transactions from './Transactions'
import DepositForm from './DepositForm'
import WithdrawForm from './WithdrawForm'

function HomeContent() {
    const [showDepositForm, setShowDepositForm] = useState(false);
    const [showWithdrawForm, setShowWithdrawForm] = useState(false);
    const [hideTransactions, setHideTransactions] = useState(true);

    const toggleDepositForm = () => {
        setShowDepositForm(!showDepositForm);
        setHideTransactions(!hideTransactions);
        setShowWithdrawForm(false)
    };

    const toggleWithdrawForm = () => {
        setShowDepositForm(false);
        setHideTransactions(!hideTransactions);
        setShowWithdrawForm(!showWithdrawForm)
    };

    const hideDepositForm = () => {
        setShowDepositForm(false);
        setHideTransactions(true);
    };
    
    const hideWithdrawForm = () => {
        setHideTransactions(true);
        setShowWithdrawForm(false);
    };

  return (
    <>
    <div className='HomeContentContainer'>
        <p>My total savings</p>
        <button>Manage card</button>
        {/* <p class="interesAccrued">+25.01</p>
        <i class='bx bx-trending-up'></i> */}
    </div>
    <div className='HomeContentSubContainer'>
        <div>
            <p className="amount"><span>Php </span>25,000.98</p>
        </div>
        <div className="interestAccrued">
            <p>+25.01</p>
            <i className='bx bx-trending-up'></i>
        </div>
    </div>
    <div className='HomeContentButtonContainer'>
        <div>
            {/* <p>Deposit</p> */}
            <button onClick={toggleDepositForm}>Deposit</button>
            <i className='bx bxs-arrow-to-bottom'></i>
        </div>
        <div>
            <button onClick={toggleWithdrawForm}>Withdraw</button>
            <i className='bx bxs-arrow-from-bottom'></i>
        </div>
    </div>
    <div className='HomeContentSecondaryButton'>
        <div>
            <QuickLoanButton />
            <i className='bx bx-pie-chart'></i>
            <i className='bx bx-dots-horizontal-rounded'></i>
        </div>
    </div>
    {hideTransactions && <Transactions />}
    {showDepositForm  && <DepositForm onHideDepositForm={hideDepositForm} />}
    {showWithdrawForm  && <WithdrawForm onHideWithdrawForm={hideWithdrawForm} />}
    </>
  )
}

export default HomeContent