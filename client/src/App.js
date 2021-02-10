import './App.css';
import Customers from './components/customers/customers.js'
import Form from './components/form/form.js'
import Header from './components/header/header.js'
import {useState} from 'react';



function App() {
  const [customerState, setCustomerState] = useState(false);

  return (
    <div className="App">
      <Header />
      <Customers customerState = {customerState} />
      <Form customerState = {setCustomerState} />
    </div>
  );
}

export default App;
