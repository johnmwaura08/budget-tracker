import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const EditExpense = () => {
    const {expenses} = useContext(AppContext)
    const[selectedExpense, setSelectedExpense] = useState({
        id: null,
        name: "",
        cost: 0
    })
    useEffect (() => {
        const selectedExpense = expenses.find((currentExpenseId) => currentExpenseId === parseInt(props.id));
        setSelectedExpense(selectedExpense)
    },[props.id,expenses])
    return (
        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label htmlFor="name">Name</label>
                <input required="required"
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className="col-sm">
                <label htmlFor="name">Cost</label>
                <input required="required"
                    type="text"
                    className="form-control"
                    id="cost"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                ></input>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </div>
        </div>
    </form>
    )
}

export default EditExpense
