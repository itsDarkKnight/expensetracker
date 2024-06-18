import React, { useContext } from 'react'
import { GlobalContext } from '../cntext/GlobalState'


function Balance() {

  const {transaction}=useContext(GlobalContext);
  const amounts = transaction.map(data => data.amount);

  const total = amounts.reduce((a, b) => (a += b), 0).toFixed(2);
  return (
    
    <>
    <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
</>
  )
}

export default Balance