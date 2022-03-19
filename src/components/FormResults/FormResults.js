import React from 'react';
import { FormContext } from '../Context/Context';

function FormResults() {

    const { 
        inputs
     } = React.useContext(FormContext);

    return (
      <section className='formResults'>
          <span>Tu nombre es: {inputs.name} {inputs.secondName} {inputs.fathersLastName} {inputs.mothersLastName}</span>
          <span>Tu cumpleaños es: {inputs.day} de {inputs.month} de {inputs.year}</span>
          <span>Your email is: {inputs.email} Your telephone is: {inputs.phone} </span>
      </section>
    );
  }

export { FormResults };