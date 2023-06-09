import Expenses from "./components/Expenses";
const App = () => {
  const expenses = [
    { id: 'e1', title: "Car Insurance", amount: "8200", date: new Date(2023, 5, 8) },
    { id: 'e2', title: "Petrol", amount: "3200", date: new Date(2023, 5, 9) },
    { id: 'e3', title: "Shopping", amount: "6900", date: new Date(2023, 5, 9) }
  ];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
