import React,{ createContext,useReducer } from "react"
import TransactionReducer from "./transReducer";
const iniTransactions=[
    {amount:500,desc:"cash"},
    {amount:500,desc:"cash"},
    {amount:500,desc:"cash"},
    {amount:600,desc:"cash"}
 ]

 export const TransactionContext=createContext(iniTransactions);



 export const TransactionProvider = ({children})=>{
    let [state,dispatch] = useReducer(TransactionReducer,iniTransactions);
    function addTransaction(transObj){
        dispatch(
            {
                type:"ADD",
                payload:{
                    amount:transObj.amount,
                    desc:transObj.desc
                },
            }
        )
    }
    return(
        <TransactionContext.Provider value={
           { transactions:state,
            addTransaction
        }
        }>
            {children}
        </TransactionContext.Provider>
    )
 }