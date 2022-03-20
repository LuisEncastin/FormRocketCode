import React from 'react';
import { FormContext } from '../Context/Context';

function ContactData() {

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

    const onKeyUp = () => {
        setNewUserInfo(inputs);
      }

    return(   
        <>
            <section className="surveySection">
                <div className="surveySection--container">
                    <div className='imgContainer'>
                                            
                    </div>
                    <div className='inputsContainer'>
                        <h4>Datos de contacto:</h4>
                        <div>
                            <input type="email" className='form-control' name="email" id="email" placeholder="Correo electrónico" value={inputs.email || ""} onChange={handleChange} required/>
                            <input type="tel" className='form-control' name="phone" id="phone" placeholder="Teléfono celular" value={inputs.phone || ""} onChange={handleChange} onKeyUp={onKeyUp} required/>
                        </div>
                        <div className='surveySection--result'>
                            <p>Correo: {inputs.email} <br/>
                            Teléfono {inputs.phone} </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export { ContactData };