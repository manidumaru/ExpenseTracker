import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id : 'e1',
      date : new Date(2024, 7, 16),
      title : "Car Insurance",
      amount : 11000,
    },
    {
      id : 'e2',
      date : new Date(2024, 3, 10),
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
      date : new Date(2024, 6, 3),
      title : "Macbook Air M2",
      amount : 65000,
    },    
  ];  

  const addExpenseHandler = (expense) => {
    console.log(expense);    
  };

  return (
    <div>      
      <NewExpense onAddExpense = { addExpenseHandler } />
      <Expenses expenses = {expenses} />
    </div>    
  );
}

export default App;
