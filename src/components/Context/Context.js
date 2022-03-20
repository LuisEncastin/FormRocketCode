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
    
    //Variables de sesión
    
    const userDataVariables = async(inputs) => {
        let name = await inputs.name;
        let secondName = await inputs.secondName;
        let fathersLastName = await inputs.fathersLastName;
        let mothersLastName = await inputs.mothersLastName;

        let birthdayDay = await inputs.day;
        let birthdayMonth = await inputs.month;
        let birthdayYear = await inputs.Year;

        let email = await inputs.email;
        let phone = await inputs.email;

        console.log(name, secondName, fathersLastName, mothersLastName, birthdayDay, birthdayMonth, birthdayYear, email, phone);

    };

    

    // Ver la info. De aquí la mandaremos al mensaje del formulariol

    console.log("Aquí va la información del usuario.")
    console.log({newUserInfo});

    return(
        <FormContext.Provider value={{
            inputs,
            setInputs,
            setNewUserInfo,
            error,
            userDataVariables,
        }}>
            {props.children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider};