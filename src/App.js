import './App.css';
import AddTxn from './component/AddTxn';
import Balance from './component/Balance';
import Headerdata from './component/Headerdata';
import IncomeExpense from './component/IncomeExpense';
import TxnList from './component/TxnList';
import { GlobalProvider } from './cntext/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Headerdata/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TxnList/>
        <AddTxn/>
      </div>
    </GlobalProvider>
  );
}

export default App;
