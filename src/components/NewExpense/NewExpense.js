import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>
{
    const saveExpenseDataHandler = (expenseData) =>{
        const obj = { id:Math.random().toString(),...expenseData};
        props.onAddExpense(obj);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;