import React from 'react';
// import { FormContext } from '../Context/Context';
import './SubmitButton.css';

function SubmitButton() {

    return (
      <section className='submitButton'>
          <div className='submitButton--title'>
            <p>Si tus datos son correctos, por favor continuemos.</p>
          </div>
          <input type="submit" value="Iniciar"/>
      </section>
    );
  }

export { SubmitButton };