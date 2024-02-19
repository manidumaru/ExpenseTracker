import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id : 'e1',
    date : new Date(2024, 7, 16),
    title : "Car Insurance",
    amount : 11000,
  },
  {
    id : 'e2',
    date : new Date(2020, 3, 10),
    title : "Fantech Keyboard",
    amount : 11000,
  },
  {
    id : 'e3',
    date : new Date(2024, 10, 9),
    title : "MSI M251 Pro",
    amount : 17000,
  },
  {
    id : 'e4',
    date : new Date(2022, 6, 3),
    title : "Macbook Air M2",
    amount : 65000,
  },    
];

function App() {    
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 
  const addExpenseHandler = (expense) => {    
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses] });    
  };

  const titleChanger = (newTitle, id) => {
    let newExpense = expenses.map((item) => {
      if(item.id === id) {
        item.title = newTitle;
      }
      return item;
    })
    setExpenses(newExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense = { addExpenseHandler } />      
      <Expenses 
      onTitleChange = {titleChanger} 
      expenses = { expenses } />
    </div>    
  );
}

export default App;
