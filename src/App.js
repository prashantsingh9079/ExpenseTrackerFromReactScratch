import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [{ title: "Car Insurance", amount: "8200", date: new Date(2023, 5, 8) },
  { title: "Petrol", amount: "3200", date: new Date(2023, 5, 9) },
  { title: "Shopping", amount: "6900", date: new Date(2023, 5, 9) }];
  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </div>
  );
}

export default App;
