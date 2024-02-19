import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    const itemYear = item.date.getFullYear();
    return itemYear.toString() === filteredYear;
  });

  let expenseContent = <p className="no-expenses-found">No expense found.</p>
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => {
      return <ExpenseItems key={item.id} 
      onTitleChange = {props.onTitleChange} 
      expenseItem={item} />;
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={yearChangeHandler} />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
