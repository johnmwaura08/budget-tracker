import React, { useContext,useEffect,useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AiFillEdit} from 'react-icons/ai'
import { AppContext } from '../context/AppContext';

function ExpenseItem(props) {
    const { dispatch, expenses } = useContext(AppContext);

   

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }
    const handleEditExpense = (event) => {
        console.log(selectedExpense)
        event.preventDefault()
        dispatch({
            type: 'EDIT_EXPENSE',
            payload: selectedExpense
        })
    }
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">{props.name}
      <div>
          <span className="badge badge-primary badge-pill mr-3">
              ${props.cost}
          </span>
          <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
          <AiFillEdit size='1.5em' onClick={handleEditExpense}></AiFillEdit>
      </div>
      </li>
    )
}

export default ExpenseItem
