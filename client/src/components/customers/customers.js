import './customers.css';
import {useEffect, useState} from 'react';

function Customers() {
    const [customerState, setCustomerState] = useState([]);

    useEffect(()=>{
      fetch('/api/customers').then(res => {
        if(res.ok){
          return res.json()
        }
      }).then(jsonResponse => setCustomerState(jsonResponse))
    },[])
    
  return (
    <div>
        <h2>Customers</h2>
        <ul>
            {customerState.map(c => 
                <li key={c.id}>{c.firstName} {c.lastName}</li>
            )}
        </ul>
    </div>
  );
}

export default Customers;
