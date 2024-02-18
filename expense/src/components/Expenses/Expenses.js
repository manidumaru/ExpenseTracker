import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [currentSelectedYear, setCurrentSelectedYear] = useState("2022");

  const yearChangeHandler = (selectedYear) => {
    setCurrentSelectedYear(selectedYear);
    console.log(currentSelectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedDrop={currentSelectedYear}
        onYearChange={yearChangeHandler}
      />
      {props.expenses.map((item) => {
        return <ExpenseItems expenseItem={item} />
      })}
    </Card>
  );
}

export default Expenses;
