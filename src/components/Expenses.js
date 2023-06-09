import './Expenses.css';
import ExpenseItem from './ExpenseItem';
const Expenses = (props) => {
    console.log(props)
    return (
        
        <div className='expenses'>
            <ExpenseItem title={props.arr[0].title} amount={props.arr[0].amount} date={props.arr[0].date} />
            <ExpenseItem title={props.arr[1].title} amount={props.arr[1].amount} date={props.arr[1].date} />
            <ExpenseItem title={props.arr[2].title} amount={props.arr[2].amount} date={props.arr[2].date} />
        </div>
    )
}

export default Expenses