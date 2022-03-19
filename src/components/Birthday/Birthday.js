import React from 'react';
import { FormContext } from '../Context/Context';
import './Birthday.css';

function Birthday() {

    const { 
        inputs,
        setInputs
     } = React.useContext(FormContext);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
    }

    return(   
        <>
            <section>
                <label>¿Cuál es tu fecha de nacimiento?</label>
                <input type="date" className='form-control' name="day" id="day" placeholder="Día" value={inputs.day || ""} onChange={handleChange}/>
                <input type="month" className='form-control' name="month" id="month" placeholder="Mes" value={inputs.month || ""} onChange={handleChange}/>
                <input type="number" className='form-control' name="year" id="year" placeholder="Año" value={inputs.year || ""} onChange={handleChange}/>
            </section>
            <span>Tu cumpleaños es: {inputs.day} de {inputs.month} de {inputs.year}</span>
        </>
    );
}

export { Birthday };