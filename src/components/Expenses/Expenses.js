import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
        <ExpenseItem
        title={expenses[0].title}
        LocationOfExpenditure={expenses[0].LocationOfExpenditure}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        LocationOfExpenditure={expenses[3].LocationOfExpenditure}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    
    </Card>
  )
}
export default Expenses;