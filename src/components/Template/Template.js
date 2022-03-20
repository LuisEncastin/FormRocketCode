import React from 'react';
import { UserName } from '../UserName/UserName';
import { Birthday } from '../Birthday/Birthday';
import { ContactData } from '../ContactData/ContactData';
import { FormResults } from '../FormResults/FormResults';
import { FormContext } from '../Context/Context';
import { Modal } from '../Modal/Modal'

import './Template.css';

function Template() {

    // react context
    const {
      inputs,
      setNewUserInfo,
      openModal,
      setOpenModal,
   } = React.useContext(FormContext);

    // Submit button event

    const handleSubmit = (event) => {
        event.preventDefault();
        // First set the user info and Now send the user info to the context
        setNewUserInfo(inputs);
      }

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

    return (
        <form className="template" onSubmit={handleSubmit}>
            <h2>Título del formulario. </h2>
            <h3>En menos de 5 minutos. </h3>
            <UserName/>
            <Birthday/>
            <ContactData/>
            <input type="submit" onClick={onClickButton}/>

            {!!openModal && (
                <Modal>
                   <FormResults/> 
                </Modal>
            )}     
        </form>
    );
  }
  
  export {Template};