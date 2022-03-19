import React from 'react';
import { FormContext } from '../Context/Context';
import './ContactData.css';

function ContactData() {

    const { 
        inputs,
        setInputs
     } = React.useContext(FormContext);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
    }

    return(   
        <>
            <section>
                <label>Datos de contacto:</label>
                <input type="email" className='form-control' name="email" id="email" placeholder="Correo electrónico" value={inputs.email || ""} onChange={handleChange}/>
                <input type="tel" className='form-control' name="phone" id="phone" placeholder="Teléfono celular" value={inputs.phone || ""} onChange={handleChange}/>
            </section>
            <span>Your email is: {inputs.email} Your telephone is: {inputs.phone} </span>
        </>
    );
}

export { ContactData };