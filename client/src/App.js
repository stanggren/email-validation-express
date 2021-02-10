import './App.css';
import Customers from './components/customers/customers.js'
import Form from './components/form/form.js'
import Header from './components/header/header.js'
import {useState} from 'react';



function App() {
  const [customerState, setCustomerState] = useState(false);
  const [formState, setFormState] = useState(false);

  return (
    <div className="App">
      <Header />
      <Customers setFormState={setFormState} setCustomerState={setCustomerState} customerState = {customerState} />
      <Form setFormState={setFormState} formState={formState} setCustomerState = {setCustomerState} />
    </div>
  );
}

export default App;
