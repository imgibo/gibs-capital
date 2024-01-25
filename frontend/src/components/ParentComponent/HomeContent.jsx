import React from 'react'
import QuickLoanButton from '../../components/ui/QuickLoanButton'
import '../../styles/ParentComponent/homeContent.css'
import Transactions from './Transactions'

function HomeContent() {

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
            <p>Deposit</p>
            <i className='bx bxs-arrow-to-bottom'></i>
        </div>
        <div>
            <p>Withdraw</p>
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
    <Transactions />
    </>
  )
}

export default HomeContent