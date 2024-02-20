import { useState } from 'react';
import './ExpenseFilter.css';
import MonthlyExpense from './MonthlyExpense';

const ExpenseFilter = (props) => {
    const [dropSelected, setDropSelected] = useState('2020');

    const chartData = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartData[expenseMonth].value += expense.amount;
    }

    const yearChangeHandler = (event) => {
        setDropSelected(event.target.value);
        props.onYearChange(event.target.value);
    };

    return (
        <div className="expense-filter__container">
            <div className="expense-filter__top">
                <div className="expense-filter__title">Filter by Year { dropSelected }</div>
                <div className="expense-filter__dropdown-container">
                    <select className="expense-filter__dropdown" onChange={ yearChangeHandler } >
                        <option value = "2020">2020</option>
                        <option value = "2021">2021</option>
                        <option value = "2022">2022</option>
                        <option value = "2023">2023</option>
                        <option value = "2024">2024</option>
                    </select>
                </div>
            </div>
            <MonthlyExpense chartDatapoints = { chartData } />
        </div>
    );
};

export default ExpenseFilter;