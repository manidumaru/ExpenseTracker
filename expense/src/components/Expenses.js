import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((item) => {return <ExpenseItems expenseItem = {item}></ExpenseItems>})}
        </Card>
    );
}

export default Expenses;