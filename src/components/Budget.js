import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency} = useContext(AppContext); 
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    // Calculate total spending
    const totalSpending = expenses.reduce((acc, expense) => acc + expense.cost, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10); 

        if (updatedBudget < totalSpending) {
            alert('You cannot reduce the budget value lower than the spending.');
            setNewBudget(budget); 
            return; 
        }

        setNewBudget(updatedBudget);

        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
