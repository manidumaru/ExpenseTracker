import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItems(props) {
  const [titleChange, setTitleChange] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const titleChangeInputHandler = (event) => {
    setNewTitle(event.target.value);    
  }

  const titleChangeHandler = () => {
    setTitleChange(true);
  };

  const titleChangeCanceler = () => {
    setTitleChange(false);
  };

  const changeTitle = (event) => {
    event.preventDefault();
    props.onTitleChange(newTitle, props.expenseItem.id);
    setTitleChange(false);
  };

  let titleContent = <h2>{ props.expenseItem.title }</h2>;

  if (titleChange) {
    titleContent = 
    <form onSubmit={changeTitle}>
      <input type="text" placeholder="Enter New Title" className="title-change-input" onChange={titleChangeInputHandler}></input>
      <button type="submit" className="title-change-button">Done</button>
      <button type="button" className="title-change-button" onClick={titleChangeCanceler}>Cancel</button>
      <p>Title: {props.expenseItem.title} </p>
    </form>
  }
  //react hooks must be called inside a component function not inside nested function or outside component function. 
  //state variable when updated re-renders the component where it was defined.
    
  return (
    <Card className="expense-item">      
      <Card className = "expense-item__date">        
        <ExpenseDate date = { props.expenseItem.date }></ExpenseDate>
      </Card>
      <div className="expense-item__description">
        {titleContent}
        <Card className="expense-item__price">NPR. {props.expenseItem.amount}</Card>
      </div>
      <div className = "title-change">
        <button className ="title-change-button" onClick = { titleChangeHandler } >Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
