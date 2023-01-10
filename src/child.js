import React, { useState } from "react";
import {TransactionContext} from './transContext.js'



function Child(){
 let {transactions,addTransaction}=React.useContext(TransactionContext);
 let [desc,setDesc]=useState("");
 let [amount,setAmount]=useState(0);
 const handleAddition=(event)=>{
    event.preventDefault();
    addTransaction({
        amount:amount,
        desc:desc
    })
    console.log(desc);
    console.log(amount);
 }

    return(
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br/> 22</h3>
            <div className="expense-container">
                <h3>Income <br/>$260</h3>
                <h3>EXPENSE <br/> $260</h3>
            </div>

            <h3>History</h3>
            <hr/>
            <ul className="trans_list">
                {transactions.map((transObj,ind)=>{
                    return(
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>

                        </li>
                    )
                })}
               
            </ul>
            <h3>Add New Transaction</h3>
            <hr/>
            <form onSubmit={handleAddition}>
                <label>
                    Enter Description <br/>
                    <input type="text" onChange={(ev)=>setDesc(ev.target.value)}/>
                </label>
                <br/>
                <label>
                    Enter Amount <br/>
                    <input type="text" onChange={(ev)=>setAmount(ev.target.value)}/>
                </label>
                <br/>

                <input type="submit" value="add_trans" />
            </form>
        </div>
    );
}

export default Child;