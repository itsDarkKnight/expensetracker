import {React,useState,useContext} from 'react'
import { GlobalContext } from '../cntext/GlobalState'


function AddTxn() {
    const[amount,setamount]=useState(0);
    const[text,settext]=useState('');
    const {addTxn}=useContext(GlobalContext);
    const onSubmit=e =>
        {
            e.preventDefault();
            const newTxn=
            {
                id : Math.floor(Math.random() * 100000000),
                text,
                amount: +amount

            }
            addTxn(newTxn)
        }

  return (
   <>
    <h3>Add new transaction</h3>
    <form id="form" onSubmit={onSubmit}>
    <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
   </>
  )
}

export default AddTxn