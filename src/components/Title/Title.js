import React from 'react';
import { RiSurveyFill } from "react-icons/ri";
import './Title.css';

function Title() {
    return (
        <section className="title">
        <div className="title--container">
            <h2>Título del formulario. </h2>
            <h3>En menos de 5 minutos. </h3>
        </div>
        <div className="title--imageContainer">
            <RiSurveyFill className='surveyIcon'/>  
        </div>
    </section>
    )
};

export { Title };