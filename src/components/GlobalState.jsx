import React,{createContext,useReducer} from 'react';
import Appreducer from './Appreducer';

const initialState={
    transactions:[
        

    ]
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(Appreducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD',
            payload:transaction
        });
    }

    

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}