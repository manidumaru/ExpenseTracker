
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate ] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {    
        // setEnteredTitle(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    };

    const amountChangeHandler = (event) => {  
        // setEnteredAmount(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        })
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };
        setUserInput(() => {
            return {enteredTitle: '', enteredAmount:'', enteredDate: ''};
        });
        props.onSaveExpenseData(expenseData);
        props.onCancelAdd();
    };

    return (
        <form onSubmit={ formSubmitHandler }>
            <div className = "new-expense__controls">
                <div className="new-expense__control">
                    <label>Title:</label>
                    <input value = {userInput.enteredTitle} onChange = {titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount:</label>
                    <input value = {userInput.enteredAmount}  onChange={amountChangeHandler} type="number" min={0.01} step={0.01} />
                </div>
                <div className="new-expense__control">
                    <label>Date:</label>
                    <input value = {userInput.enteredDate}  onChange={dateChangeHandler} type="date" min="2020-01-01" max="2024-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick = { props.onCancelAdd } className="new-expense__button">Cancel</button>
                <button type="submit" className="new-expense__button">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;