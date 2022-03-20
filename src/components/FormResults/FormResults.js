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
          <p>Tu nombre es: {newUserInfo.name} {newUserInfo.secondName} {newUserInfo.fathersLastName} {newUserInfo.mothersLastName}</p><br/>
          <p>Tu cumpleaños es: {newUserInfo.day} de {newUserInfo.month} de {newUserInfo.year}</p><br/>
          <p>Tu correo es: {newUserInfo.email}</p><br/>
          <p>Tu teléfono es: {newUserInfo.phone} </p><br/>
      </section>
    );
  }

export { FormResults };