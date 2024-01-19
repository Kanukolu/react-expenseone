import './ExpenseItem.css';

function ExpenseItem(Props) {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const  LocationOfExpenditure='market'

  return (
    <div className='expense-item'>
      <div>{Props.date.toISOString()}</div>
      <div className='expense-item__description'>
      
        <h2>{Props.title}</h2>
        <h2>{Props.LocationOfExpenditure}</h2> 
        <div className='expense-item__price'>${Props.amount}</div>
    </div>
    
    </div>
  );
}

export default ExpenseItem;