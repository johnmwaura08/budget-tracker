import { createContext, useReducer, useState } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        default: return state;
    }
}

const initialState = {
    budget: 2055,
    expenses: [
        { id: 12, name: "shopping", cost: 42 },
        { id: 13, name: "holiday", cost: 402 },
        { id: 14, name: "car service", cost: 52 }
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [ totalExpenses, setTotalExpenses] =useState(0)
    const {budget, expenses} = state;

    return (
        <AppContext.Provider
            value={{
                budget,
                expenses,
                totalExpenses,
                setTotalExpenses,
                dispatch
            }}
        >{props.children}</AppContext.Provider>
    )
}