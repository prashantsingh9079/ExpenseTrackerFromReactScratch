import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React,{useState} from 'react';
const NewExpense = (props) =>
{
    const [show,setShow] = useState(false);

    const saveExpenseDataHandler = (expenseData) =>{
        const obj = { id:Math.random().toString(),...expenseData};
        props.onAddExpense(obj);
    }

    const isEditing = () =>{
        setShow(true);
    }

    const isEditingFalse = () =>{
        setShow(false);
    }
    return(
        <div className="new-expense">
            {!show && <button onClick={isEditing}>Add Expense</button>}
            {/* {show && <button onClick={isEditingFalse}>Cancel</button>} */}
            {show && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} cancelButton={isEditingFalse} />} 
            
        </div>
    )
}

export default NewExpense;