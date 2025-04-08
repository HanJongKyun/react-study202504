import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const newExpense = ({ onAddExpense }) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSave={onAddExpense} />
    </div>
  );
};

export default newExpense;
