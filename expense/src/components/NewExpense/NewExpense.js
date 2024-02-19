import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [addView, setAddView] = useState(false);

  const viewHandler = () => {
    console.log("called");
    setAddView(true);
  }

  const addExpenseCanceler = () => {
    setAddView(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...enteredExpenseData };
    props.onAddExpense(expenseData);
  };
  
  let addContent = <div className="expand-button__holder"><button className="expense-add__expand-button" onClick = { viewHandler }>Add New Expense</button></div>
  if (addView) {
    addContent = <ExpenseForm onCancelAdd = { addExpenseCanceler } onSaveExpenseData = { saveExpenseDataHandler } />
  }

  return (
    <div className="new-expense">
      {addContent}
    </div>
  );
}

export default NewExpense;
