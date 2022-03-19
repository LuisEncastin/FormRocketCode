import React from 'react';
import { Nombre } from '../Nombre/Nombre'
import { FormResults } from '../FormResults/FormResults'
import { Birthday } from '../Birthday/Birthday';

import './Template.css';

function Template() {

    // Submit button event
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(" Tu información es la siguiente");
      }

    return (
        <form className="template" onSubmit={handleSubmit}>
            <h2>Título del formulario. </h2>
            <h3>En menos de 5 minutos. </h3>
            <Nombre/>
            <Birthday/>
            <input type="submit" />
            <FormResults/>
        </form>
    );
  }
  
  export {Template};