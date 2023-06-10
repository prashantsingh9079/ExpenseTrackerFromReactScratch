import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const dummy_expenses = [
  { id: 'e1', title: "Car Insurance", amount: "8200", date: new Date(2023, 5, 8) },
  { id: 'e2', title: "Petrol", amount: "3200", date: new Date(2022, 5, 9) },
  { id: 'e3', title: "Shopping", amount: "6900", date: new Date(2021, 5, 9) },
  { id: 'e4', title: "Pizza", amount: "800", date: new Date(2020, 5, 10) }
];


const App = () => {

  const [expVal, setExpVal] = useState(dummy_expenses);

  const addExpenseHandler= (obj) =>{
    //console.log(obj);
    setExpVal((prevState) =>{
      return [obj,...prevState]
    })
    //expenses.push({id:obj.id , title:obj.title , amount:obj.amount , date:obj.date });
  }
  //console.log(expVal)

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expVal}/>
    </div>
  );
}

export default App;
