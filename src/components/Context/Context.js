import React from 'react';
import { useState } from "react";
// import { useLocalStorage } from '../TodoContext/customHooks';

const FormContext = React.createContext();

//React.createContext incuye 2 elementos:
//<ToDoContext.Provider></ToDoContext.Provider> => las propiedades que queremos exportar
//<ToDoContext.Consumer></ToDoContext.Consumer> => lo que nos permitirá consumirlas.

function FormProvider (props) {

// Custom hook - localStorage
//   const {
//     item: toDos,
//     saveItem: saveToDos,
//     loading,
//     error,
//     } = useLocalStorage('TODOS_V1', []);

  // State
  const [inputs, setInputs] = useState({});
  
    return(
        <FormContext.Provider value={{
            inputs,
            setInputs
        }}>
            {props.children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider};