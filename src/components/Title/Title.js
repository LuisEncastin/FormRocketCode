import React from 'react';
import { RiSurveyFill } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import './Title.css';

function Title() {
    return (
        <section className="title">
        <div className="title--container">
            <h2>Título del formulario. </h2>
            <h3> <IoIosTimer className='timerIcon'/> En menos de 5 minutos. </h3>
        </div>
        <div className="title--imageContainer">
            <RiSurveyFill className='surveyIcon'/>  
        </div>
    </section>
    )
};

export { Title };

