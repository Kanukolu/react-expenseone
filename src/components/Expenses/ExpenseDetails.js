import React from 'react';
import  "./ExpenseItem.css";
function ExpenseDetails(props){
    const title=props.title;
    const LocationOfExpenditure=props.LocationOfExpenditure;
    const amount=props.amount;
    return(
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__description'><h2>{LocationOfExpenditure}</h2></div>
        <div className='expense-item__price'>${amount}</div>
      </div>

    )
}
export default ExpenseDetails