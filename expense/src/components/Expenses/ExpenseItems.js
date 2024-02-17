import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItems(props) {
    
  return (
    <Card className="expense-item">      
      <Card className = "expense-item__date">
        <ExpenseDate date = {props.expenseItem.date}></ExpenseDate>        
      </Card>
      <div className="expense-item__description">
        <h2>{props.expenseItem.title}</h2>
        <Card className="expense-item__price">NPR. {props.expenseItem.amount}</Card>
      </div>      
    </Card>
  );
}

export default ExpenseItems;
