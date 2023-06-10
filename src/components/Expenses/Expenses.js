import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import React,{useState} from 'react';
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2019')
    
    const saveYearHandler = (year) =>{
        //console.log(year);
        setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter((item)=>{
        return(item.date.getFullYear().toString() === filteredYear)
    })
    console.log(filteredExpenses)
    //console.log(filteredYear);
    //console.log(props.items)
    return (
        
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onSaveYear={saveYearHandler}/>
            {filteredExpenses.length === 0 && <p className='noData'>No Data for Selected Year</p>}  
            { filteredExpenses.length>0 && filteredExpenses.map((item) =>{
                return (<ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount}/>)
            })}
            
        </Card>

    )
}

export default Expenses