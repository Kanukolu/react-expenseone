import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      
        <h2>{props.LocationOfExpenditure}</h2>
        <div className='expense-item__price' >${props.amount}</div>
      </div> 
      <button>change title</button>
      <button>Delete</button>
      
    </Card>
  );
}

export default ExpenseItem;