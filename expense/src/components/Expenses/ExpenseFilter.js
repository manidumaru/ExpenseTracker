import './ExpenseFilter.css';
import MonthlyExpense from './MonthlyExpense';

const ExpenseFilter = (props) => {

    const yearChangeHandler = (event) => {        
        props.onYearChange(event.target.value);
    };

    return (
        <div className="expense-filter__container">
            <div className="expense-filter__top">
                <div className="expense-filter__title">Filter by Year</div>
                <div className="expense-filter__dropdown-container">
                    <select className="expense-filter__dropdown" onChange={ yearChangeHandler }>
                        <option value = "2020">2020</option>
                        <option value = "2021">2021</option>
                        <option value = "2022">2022</option>
                        <option value = "2023">2023</option>
                        <option value = "2024">2024</option>
                    </select>
                </div>
            </div>
            <MonthlyExpense />            
        </div>
    );
};

export default ExpenseFilter;