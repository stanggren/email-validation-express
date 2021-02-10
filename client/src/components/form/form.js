import './form.css';
import axios from 'axios';
import {useRef} from 'react';

function Form() {

    const input = useRef(null);

    function handleSubmit(e){

        const form = input.current
        const value = form['name'].value;
        console.log(value);

        e.preventDefault();
        axios({
            method: 'post',
            url: '/api/submit',
            data: {
                name: value
            }
        })

    }

    return (
        <div>
            <h2>Form</h2>
            <form ref={input} id="form">
                <input  type="text" name={'name'}></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
