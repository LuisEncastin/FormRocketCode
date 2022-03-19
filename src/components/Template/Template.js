import React from 'react';
import { Nombre } from '../Nombre/Nombre'
import './Template.css';

function Template() {
    return (
        <div className="template">
            <h2>Título del formulario. </h2>
            <h3>En menos de 5 minutos. </h3>
            <Nombre/>
        </div>
    );
  }
  
  export {Template};