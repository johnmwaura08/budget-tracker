import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Remaining() {
    const { expenses, budget,setTotalExpenses } = useContext(AppContext);

    console.log(expenses)
    const testExpenses = [ 42, 402 , 52 ]
    
    testExpenses.reduce((total, item) => {
        console.log(item)
        console.log(total + item)
        return total + item
    }, 0)

    // expenses.map(expense => (
    //     console.log(expense.cost)
    // )
    // )
     expenses.reduce((total, item) => {
        let totali = total + item.cost
        console.log(totali)
        return totali
    },0)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    setTotalExpenses(totalExpenses);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining
