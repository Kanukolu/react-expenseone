import React ,{useState}from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  //change title
  const [title,setTitle]=useState(props.title)
  
  const clickHandler=()=>{
    setTitle("table")
    console.log(title)
  }
  //CHANGE amount
  const [amount,setamount]=useState(props.amount)
  
  const clickHandle=()=>{
    setamount("100")
    console.log(amount)
  }




  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className='expense-item__price' >${amount}</div>
      </div> 
      <button onClick={clickHandler}>change Title</button>
      <button onClick={clickHandle}>change amount</button>
      
    </Card>
  );
}

export default ExpenseItem;