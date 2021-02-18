import './form.css';
import axios from 'axios';
import {useRef, useState, useEffect} from 'react';


function Form(props) {

    const input = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);

    const [FNState, setFNState] = useState('valid');
    const [LNState, setLNState] = useState('valid');
    const [emailState, setEmailState] = useState('valid');
    const [formState, setFormState] = useState('show-form')

    useEffect(() => {
        if (props.formState){
            setFormState('show-form');
        }
      }, [props.formState])

    function handleSubmit(e){

        resetInvalidFields();

        const form = input.current
        const fn = form['firstName'].value;
        const ln = form['lastName'].value;
        const em = form['email'].value;

        e.preventDefault();
        axios({
            method: 'post',
            url: '/api/submit',
            data: {
                firstName: fn,
                lastName: ln,
                email: em
            }
        }).then((response) => {
            checkInvalidFields(response.data);
        })
    }
    function checkInvalidFields(data){

        let invalidFields = []
        Object.entries(data).forEach(([key, val]) => {
            if (!val){
                invalidFields.push(key);
            }
        })

        if (invalidFields.length > 0){
            displayInvalidFields(invalidFields);
        } else {
            removeForm();
            renderCustomerList();
        }
    }

    function displayInvalidFields(invalidFields){
        for(let i = 0; i < invalidFields.length; i++){
            if (invalidFields[i] === 'firstName'){
                setFNState('invalid');
            } else if (invalidFields[i] === 'lastName'){
                setLNState('invalid');
            } else {
                setEmailState('invalid');
            }
        }
    }

    function removeForm() {
        setFormState('hide-form');
    }

    function renderCustomerList(){
        props.setCustomerState(true);
        props.setFormState(false);
    }

    function resetInvalidFields(){
        setFNState('valid');
        setLNState('valid');
        setEmailState('valid');
    }


    return (
        <div className={formState}>
            <form ref={input} id="form" className="form">
                <p className="form-info">First name:</p>
                <input type="text" name={'firstName'}></input>
                <p className={FNState} ref={firstName}>Please enter a valid first name.</p>
                <p className="form-info">Last name:</p>
                <input type="text" name={'lastName'}></input>
                <p className={LNState} ref={lastName}>Please enter a valid last name.</p>
                <p className="form-info">Email:</p>
                <input type="email" name={'email'}></input>
                <p className={emailState} ref={email}>Please enter a valid email.</p>
                <button onClick={handleSubmit}>Subscribe</button>
            </form>
        </div>
    );
}

export default Form;
