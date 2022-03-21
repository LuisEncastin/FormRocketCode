import React from 'react';
import { FormContext } from '../Context/Context';
import './FormResults.css';

function FormResults() {

    const { 
      newUserInfo,
     } = React.useContext(FormContext);

    return (
      <section className='formResults'>
          <h3>FORM RESULTS</h3>
          <p>Tu nombre es: {newUserInfo.name} {newUserInfo.secondName} {newUserInfo.fathersLastName} {newUserInfo.mothersLastName}</p>
          <p>Tu fecha de nacimiento es: {newUserInfo.day} de {newUserInfo.month} de {newUserInfo.year}</p>
          <p>Tu correo es: {newUserInfo.email}</p>
          <p>Tu teléfono es: {newUserInfo.phone} </p>
      </section>
    );
  }

export { FormResults };