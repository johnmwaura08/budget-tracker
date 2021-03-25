import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'EDIT_EXPENSE':
            const updatedExpense = action.payload;

            const updatedExpenses = state.expenses.map((expense) => {
                if(expense.id === updatedExpense.id){
                    return updatedExpense
                }
                return expense
            })
            return{
                ...state,
                expenses: updatedExpenses  
            }    
        case 'DELETE_EXPENSE' :
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
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
    const {budget, expenses} = state;

    return (
        <AppContext.Provider
            value={{
                budget,
                expenses,
                dispatch
            }}
        >{props.children}</AppContext.Provider>
    )
}