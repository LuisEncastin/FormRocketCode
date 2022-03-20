import React from 'react';
import { FormContext } from '../Context/Context';

function FormResults() {

    const { 
      newUserInfo,
     } = React.useContext(FormContext);

    return (
      <section className='formResults'>
          <p>FORM RESULTS</p>
          <span>Tu nombre es: {newUserInfo.name} {newUserInfo.secondName} {newUserInfo.fathersLastName} {newUserInfo.mothersLastName}</span>
          <span>Tu cumpleaños es: {newUserInfo.day} de {newUserInfo.month} de {newUserInfo.year}</span>
          <span>Your email is: {newUserInfo.email} Your telephone is: {newUserInfo.phone} </span> 
      </section>
    );
  }

export { FormResults };