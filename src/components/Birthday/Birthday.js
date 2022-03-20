import React from 'react';
import { FormContext } from '../Context/Context';
import './Birthday.css';

function Birthday() {

    const { 
        inputs,
        setInputs,
        setNewUserInfo,
     } = React.useContext(FormContext);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
      setNewUserInfo(inputs);
    }

    return(   
        <>
            <section>
                <label>¿Cuál es tu fecha de nacimiento?</label>
                <input type="number" className='form-control' name="day" id="day" placeholder="Día" value={inputs.day || ""} onChange={handleChange} min="1" max="31"/>
                <input type="text" className='form-control' name="month" id="month" placeholder="Mes" value={inputs.month || ""} onChange={handleChange}/>
                <input type="number" className='form-control' name="year" id="year" placeholder="Año" value={inputs.year || ""} onChange={handleChange} min="1" max="2022"/>
            </section>
            <span>Tu cumpleaños es: {inputs.day} de {inputs.month} de {inputs.year}</span>
        </>
    );
}

export { Birthday };