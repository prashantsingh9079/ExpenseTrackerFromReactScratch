import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>
{
    const saveExpenseDataHandler = (expenseData) =>{
        const obj = {...expenseData, id:Math.random().toString()};
        props.onAddExpense(obj);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;