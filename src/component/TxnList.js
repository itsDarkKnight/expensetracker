import React, { useContext } from 'react'
import { GlobalContext } from '../cntext/GlobalState'

function TxnList() {
  const {transaction,deleteTxn}=useContext(GlobalContext);
  return (
    <>
     <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map(data=>( 
           <li className={data.amount <0 ? "minus": "plus"}>
          {data.text} <span>{data.amount}</span><button onClick={()=>deleteTxn(data.id)} className="delete-btn">x</button>
        </li> ))}
       
      </ul>
    </>
  )
}

export default TxnList