import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //const [userInput, setUserInput] = useState({enteredTitle:'', enteredAmount:'',enteredDate:''});

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);

        //setUserInput({...userInput,enteredTitle:e.target.value});
    }
    //console.log(userInput.enteredTitle)
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        //setUserInput({...userInput,enteredAmount:e.target.value});
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        //setUserInput({...userInput,enteredDate:e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.cancelButton();
        //console.log(userInput)
    }



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.cancelButton}>Cancel</button>
                <button type='submit' >Add Expense</button>

            </div>
        </form>
    )
}

export default ExpenseForm;