import './ExpenseItem.css';


const ExpenseItem = () => {

    const ExpenseDate = new Date(2023,5,8);
    const ExpenseTitle = 'Car Insurance';
    const ExpenseAmount = 8200;

    return (
        <div className="expense-item">
            <div>{ExpenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{ExpenseTitle}</h2>
                <div className="expense-item__price">Rs{ExpenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;