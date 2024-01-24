import React from 'react'
import '../../styles/ParentComponent/transactions.css'

function Transactions() {
  return (
    <div class="sixthRow">
        <div>
            <p>Transaction</p>
            <p>See all</p>
        </div>
        <div class="transaction-card">
            <div class="trans-icon">
                <i class='bx bxs-arrow-to-bottom'></i>
            </div>
            <div>
                <p class="trans-name">Deposit</p>
                <p class="trans-date">29 Sep 2023, 14:02</p>
            </div>
            <div class="deposit">
                <p class="trans-amount">+P1,200.00</p>
                <p class="trans-status">Completed</p>
            </div>
        </div>
        <div class="transaction-card">
            <div class="trans-icon">
                <i class='bx bxs-arrow-from-bottom'></i>
            </div>
            <div>
                <p class="trans-name">Withdraw</p>
                <p class="trans-date">28 Sep 2023, 07:11</p>
            </div>
            <div class="withdraw">
                <p class="trans-amount">-P500.00</p>
                <p class="trans-status">Completed</p>
            </div>
        </div>
        <div class="transaction-card">
            <div class="trans-icon">
                <i class='bx bx-transfer'></i>
            </div>
            <div>
                <p class="trans-name">Transfer</p>
                <p class="trans-date">27 Sep 2023, 18:42</p>
            </div>
            <div class="transfer">
                <p class="trans-amount">-P3,000.00</p>
                <p class="trans-status">Completed</p>
            </div>
        </div>
        <div class="transaction-card">
            <div class="trans-icon">
                <i class='bx bxs-arrow-to-bottom'></i>
            </div>
            <div>
                <p class="trans-name">Deposit</p>
                <p class="trans-date">26 Sep 2023, 14:02</p>
            </div>
            <div class="deposit">
                <p class="trans-amount">+P1,200.00</p>
                <p class="trans-status">Completed</p>
            </div>
        </div>
        <div class="transaction-card">
            <div class="trans-icon">
                <i class='bx bxs-arrow-from-bottom'></i>
            </div>
            <div>
                <p class="trans-name">Withdraw</p>
                <p class="trans-date">25 Sep 2023, 07:11</p>
            </div>
            <div class="withdraw">
                <p class="trans-amount">-P500.00</p>
                <p class="trans-status">Completed</p>
            </div>
        </div>
    </div>
  )
}

export default Transactions