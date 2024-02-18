import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
// import { useState } from "react";

function Expenses(props) {

    // const [currentSelectedYear, setCurrentSelectedYear] = useState('');

    const yearChangeHandler = (selectedYear) => {
        console.log("from expenses " + selectedYear);
        // setCurrentSelectedYear(selectedYear);
        // console.log(currentSelectedYear);
    }

    return (
        <div>
            
            <Card className="expenses">
                <ExpenseFilter onYearChange = {yearChangeHandler} />
                {props.expenses.map((item) => {return <ExpenseItems expenseItem = {item}></ExpenseItems>})}
            </Card>
        </div>
    );
}

export default Expenses;