import React from 'react';
import { UserName } from '../UserName/UserName';
import { Birthday } from '../Birthday/Birthday';
import { ContactData } from '../ContactData/ContactData';
import { FormResults } from '../FormResults/FormResults';


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
            <UserName/>
            <Birthday/>
            <ContactData/>
            <input type="submit" />
            <FormResults/>
        </form>
    );
  }
  
  export {Template};