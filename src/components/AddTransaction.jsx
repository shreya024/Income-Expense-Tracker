import React,{useState,useContext} from 'react';
import { GlobalContext } from './GlobalState';
import nextId from "react-id-generator";

export const AddTransaction = () => {

    const [title,setTitle]=useState("Title:");
    const [amount,setAmount]=useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit=e=>{
      e.preventDefault();
      
      const newTransaction={
        id:nextId(),
        title,
        amount:+amount
        
      }
      
      addTransaction(newTransaction);
    }
    
    return (
        <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>

        <div className="form-control">
          <label className="label-css" htmlFor="text" >Text (Enter the title of income/expense)</label>
          <input className="input-info" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter text..." />
          
        </div>
        <br/><br/> <br/>
        <div className="form-control">
          <label className="label-css" htmlFor="amount" >Amount (Enter negative for expense and positive for income)</label> 
          
          <input className="input-info" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <br/>
        <br/> <br/>
        <button className="btn-styling">Add transaction</button>
        
      </form>
      <br/>
    </>
    
    )
}
