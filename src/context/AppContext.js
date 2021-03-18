import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
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