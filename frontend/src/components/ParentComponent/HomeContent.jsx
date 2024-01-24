import React from 'react'
import QuickLoanButton from '../../components/ui/QuickLoanButton'
import '../../styles/ParentComponent/homeContent.css'
import Transactions from './Transactions'

function HomeContent() {
  return (
    <>
    <div class='HomeContentContainer'>
        <p>My total savings</p>
        <button>Manage card</button>
        {/* <p class="interesAccrued">+25.01</p>
        <i class='bx bx-trending-up'></i> */}
    </div>
    <div class='HomeContentSubContainer'>
        <div>
            <p class="amount"><span>Php </span>25,000.98</p>
        </div>
        <div class="interestAccrued">
            <p>+25.01</p>
            <i class='bx bx-trending-up'></i>
        </div>
    </div>
    <div class='HomeContentButtonContainer'>
        <div>
            <p>Deposit</p>
            <i class='bx bxs-arrow-to-bottom'></i>
        </div>
        <div>
            <p>Withdraw</p>
            <i class='bx bxs-arrow-from-bottom'></i>
        </div>
    </div>
    <div class='HomeContentSecondaryButton'>
        <div>
            <QuickLoanButton />
            <i class='bx bx-pie-chart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>
    </div>
    <Transactions />
    </>
  )
}

export default HomeContent