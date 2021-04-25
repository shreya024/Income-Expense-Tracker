import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Balance } from './components/Balance';
import { Income } from './components/Income';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './components/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar></Navbar>

        <div className="container">
          <Balance></Balance>
          <Income></Income>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </div>


      </div>
    </GlobalProvider>

  );
}

export default App;
