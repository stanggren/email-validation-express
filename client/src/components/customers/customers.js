import './customers.css';
import {useState, useRef, useEffect} from 'react';

function Customers(props) {
    const [customerState, setCustomerState] = useState([]);
    const [wrapperState, setWrapperState] = useState('hide-customer-wrapper');
    const wrapper = useRef(null);
    
    useEffect(() => {
      if (props.customerState){
        fetch('/api/customers').then(res => {
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => setCustomerState(jsonResponse))
        setWrapperState('show-customer-wrapper')
      } else {
        setWrapperState('hide-customer-wrapper')
      }
    }, [props.customerState])

    function returnToForm(){
      setWrapperState('hide-customer-wrapper');
      props.setFormState(true);
      props.setCustomerState(false);
    }

    
  return (
    <div ref={wrapper} className={wrapperState}>
        <h3>Subscribers</h3>
        <ul>
            {customerState.map(c => 
                <li key={c.id}>{c.firstName} {c.lastName}</li>
            )}
        </ul>
        <button onClick={returnToForm}>Return</button>
    </div>
  );
}

export default Customers;
