import React from 'react';
import './account-card.css';

function AccountCard({ title, amount, amountDescription, onViewTransactions }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={onViewTransactions}>
          View transactions
        </button>
      </div>
    </section>
  );
}

export default AccountCard;