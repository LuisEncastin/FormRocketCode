import React from 'react';
import { useState } from "react";
import { useSessionStorage } from '../Utils/CustomHooks';

const FormContext = React.createContext();

//React.createContext incuye 2 elementos:
//<ToDoContext.Provider></ToDoContext.Provider> => las propiedades que queremos exportar
//<ToDoContext.Consumer></ToDoContext.Consumer> => lo que nos permitirá consumirlas.

function FormProvider (props) {

// Custom hook - sessionStorage
  const {
    item: newUserInfo,
    saveItem: setNewUserInfo,
    // loading,
    error,
    } = useSessionStorage('USERINFO_V1', []);

    // State
    const [inputs, setInputs] = useState({});
    const [openModal, setOpenModal] = React.useState(false);

    // Methods to save items



//   const addToDo = (text) => {
//     const newToDos = [...toDos];
//     newToDos.push({
//       completed: false,
//       text,
//     });
//     saveToDos(newToDos);
//   }


    return(
        <FormContext.Provider value={{
            inputs,
            setInputs,
            openModal,
            setOpenModal,
            newUserInfo,
            setNewUserInfo,
            error,
        }}>
            {props.children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider};