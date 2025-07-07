import React, { useState } from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { useGetTransactions } from '../../hooks/useGetTransaction';
import './Expense.css'; // styling file

function Expense() {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount || !type) return;

    await addTransaction({ description, amount, type });

    setDescription('');
    setAmount('');
    setType('');
  };

  const income = transactions
    .filter((t) => t.transactionType === 'income')
    .reduce((acc, curr) => acc + curr.transactionAmount, 0);

  const expense = transactions
    .filter((t) => t.transactionType === 'expense')
    .reduce((acc, curr) => acc + curr.transactionAmount, 0);

  const balance = income - expense;

  return (
    <div className="expense-container">
      <div className="user-info">
        <img src={profilePhoto} alt="profile" className="profile-photo" />
        <h2>{name}</h2>
      </div>

      <div className="tracker">
        <h1>Expense Tracker</h1>
        <div className="balance">
          <h3>Your Balance</h3>
          <h2>{balance.toFixed(2)} ₹</h2>
        </div>

        <div className="summary">
          <div className="summary-item">
            <h4>Income</h4>
            <h5>{income.toFixed(2)} ₹</h5>
          </div>
          <div className="summary-item">
            <h4>Expenses</h4>
            <h5>{expense.toFixed(2)} ₹</h5>
          </div>
        </div>

        <form className="add-transaction" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <div className="radio-group">
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={type === 'expense'}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={type === 'income'}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="income">Income</label>
          </div>

          <button type="submit">Add Transaction</button>
        </form>

        <div className="history">
          <h3>Transaction History</h3>
          <ul>
            {transactions.map((t) => (
              <li key={t.id} className={t.transactionType}>
                {t.description} - {t.transactionAmount.toFixed(2)} ₹
                {console.log(t.transactionAmount.toFixed(2))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Expense;
