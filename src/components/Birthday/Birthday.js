import React from 'react';
import { FormContext } from '../Context/Context';

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
            <section className="surveySection"> 
                <div className="surveySection--container">
                    <div className='imgContainer'>
                    
                    </div>
                    <div className='inputsContainer'>
                        <h4>¿Cuál es tu fecha de nacimiento?</h4>
                        <div className='inputsContainer--inputs'>
                            <input type="number" className='form-control' name="day" id="day" placeholder="Día" value={inputs.day || ""} onChange={handleChange} min="1" max="31"/>
                            <input type="text" className='form-control' name="month" id="month" placeholder="Mes" value={inputs.month || ""} onChange={handleChange}/>
                            <input type="number" className='form-control' name="year" id="year" placeholder="Año" value={inputs.year || ""} onChange={handleChange} min="1" max="2022"/>
                        </div>
                        <div className='surveySection--result'>
                            <p> {inputs.day}  {inputs.month} {inputs.year}</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export { Birthday };