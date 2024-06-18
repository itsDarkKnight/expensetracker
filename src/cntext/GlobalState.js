import React, { createContext, useReducer } from "react";
import Appreducer from "./Appreducer";

const initialState = {
    transaction: [

<<<<<<< HEAD
        { id: 1, text: 'Salary', amount: 1000 },
        { id: 2, text: 'Camera', amount: -400 }
=======
       
>>>>>>> f7d6f0cb0dd4146c7c6aefa5bd67ac80c9916e34
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provide component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Appreducer, initialState);
    //Action
    function deleteTxn(id)
    {
        dispatch
        ({
            type :'DeleteTxn',
            payload : id
        })
    }
    function addTxn(transaction)
    {
        dispatch
        ({
            type :'Addtxn',
            payload : transaction
        })
    }
    return (
        <GlobalContext.Provider value={{ 
            transaction: state.transaction,
            deleteTxn,addTxn
             }}>
            {children}
        </GlobalContext.Provider>
    )
}
