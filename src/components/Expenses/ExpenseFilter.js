import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropDownHandler = (e) => {
        e.preventDefault();
        props.onSaveYear(e.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label id='label'>Filter By Year</label>
                <select value={props.selected} onChange={dropDownHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;