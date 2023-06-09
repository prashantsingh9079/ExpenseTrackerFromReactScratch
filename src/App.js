import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { id: 'e1', title: "Car Insurance", amount: "8200", date: new Date(2023, 5, 8) },
    { id: 'e2', title: "Petrol", amount: "3200", date: new Date(2023, 5, 9) },
    { id: 'e3', title: "Shopping", amount: "6900", date: new Date(2023, 5, 9) },
    { id: 'e4', title: "Pizza", amount: "800", date: new Date(2023, 5, 10) }
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
