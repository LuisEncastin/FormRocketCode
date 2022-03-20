import React from 'react';
import { Title } from '../Title/Title';
import { UserName } from '../UserName/UserName';
import { Birthday } from '../Birthday/Birthday';
import { ContactData } from '../ContactData/ContactData';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { FormResults } from '../FormResults/FormResults';
import { FormContext } from '../Context/Context';
import { Modal } from '../Modal/Modal'

import './Template.css';

function Template() {

    // react context
    const {
      openModal,
      setOpenModal,
   } = React.useContext(FormContext);

    // Submit button event

    const handleSubmit = (event) => {
        event.preventDefault();
        // First set the user info and Now send the user info to the context
        setOpenModal(!openModal);
    };

    return (
        <form className="template" onSubmit={handleSubmit}>
            <Title classnName="title"/> 
            <UserName/>
            <Birthday/>
            <ContactData/>
            <SubmitButton/>
            {!!openModal && (
                <Modal>
                <FormResults/> 
                </Modal>
            )}     

        </form>
    );
  }
  
  export {Template};