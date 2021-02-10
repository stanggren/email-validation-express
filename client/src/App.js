import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers.js'
import Form from './components/form/form.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Customers />
      <Form />
    </div>
  );
}

export default App;
