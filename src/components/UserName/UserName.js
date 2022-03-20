import React from 'react';
import { FormContext } from '../Context/Context';

function UserName() {

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
                        <h4>¿Cuál es tu nombre?</h4>
                        <div className='inputsContainer--inputs'>
                            <input type="text" className='form-control' name="name" id="name" placeholder="Nombre" value={inputs.name || ""} onChange={handleChange} required/>
                            <input type="text" className='form-control' name="secondName" id="secondName" placeholder="Segundo nombre" value={inputs.secondName || ""} onChange={handleChange} required/>
                            <input type="text" className='form-control' name="fathersLastName" id="fathersLastName" placeholder="Apellido Paterno" value={inputs.fathersLastName || ""} onChange={handleChange} required/>
                            <input type="text" className='form-control' name="mothersLastName" id="mothersLastName" placeholder="Apellido Materno" value={inputs.mothersLastName || ""} onChange={handleChange} required/>
                        </div>
                        <div className='surveySection--result'>
                            <p>Nombre: {inputs.name} {inputs.secondName} {inputs.fathersLastName} {inputs.mothersLastName}</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export { UserName };