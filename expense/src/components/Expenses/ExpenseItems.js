import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItems(props) {
  console.log("title is " + props.expenseItem.title);  
  //react hooks must be called inside a component function not inside nested function or outside component function. 
  //state variable when updated re-renders the component where it was defined.
    
  return (
    <Card className="expense-item">      
      <Card className = "expense-item__date">
        <ExpenseDate date = {props.expenseItem.date}></ExpenseDate>
      </Card>
      <div className="expense-item__description">
        <h2>{props.expenseItem.title}</h2>
        <Card className="expense-item__price">NPR. {props.expenseItem.amount}</Card>
      </div>
      <div className = "title-change">
        <button className ="title-change-button">Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
