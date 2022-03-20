import React from 'react';
import { UserName } from '../UserName/UserName';
import { Birthday } from '../Birthday/Birthday';
import { ContactData } from '../ContactData/ContactData';
import { FormResults } from '../FormResults/FormResults';
import { FormContext } from '../Context/Context';

import './Template.css';

function Template() {

    // react context
    const {
      inputs,
      setNewUserInfo,
      userDataVariables,
   } = React.useContext(FormContext);

    // Submit button event

    const handleSubmit = async(event) => {
        event.preventDefault();
        // First set the user info and Now send the user info to the context
        await setNewUserInfo(inputs);
        await userDataVariables();
        alert(`Esto va a disparar los resultados`);
        // alert(`Tu información es la siguiente ${NewUserInfo}`);
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