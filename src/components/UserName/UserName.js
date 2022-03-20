import React from 'react';
import { FormContext } from '../Context/Context';
import './UserName.css';

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
            <section>
                <label>¿Cuál es tu nombre?</label>
                <input type="text" className='form-control' name="name" id="name" placeholder="Nombre" value={inputs.name || ""} onChange={handleChange}/>
                <input type="text" className='form-control' name="secondName" id="secondName" placeholder="Segundo nombre" value={inputs.secondName || ""} onChange={handleChange}/>
                <input type="text" className='form-control' name="fathersLastName" id="fathersLastName" placeholder="Apellido Paterno" value={inputs.fathersLastName || ""} onChange={handleChange}/>
                <input type="text" className='form-control' name="mothersLastName" id="mothersLastName" placeholder="Apellido Materno" value={inputs.mothersLastName || ""} onChange={handleChange}/>
            </section>
            <span>The name you entered was: {inputs.name} {inputs.secondName} {inputs.fathersLastName} {inputs.mothersLastName}</span>
        </>
    );
}

export { UserName };