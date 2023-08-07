import React from 'react';
import style from './Cockpit.module.css';

const cockpit = ( props ) => {
    let btnClass = style.button;
    if (props.showPersons){
        //dynamic button
        btnClass = style.buttonRed;
    }

    const assignedClasses = [];
    if (props.persons.length <= 2){
        assignedClasses.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1){
        assignedClasses.push('bold'); // classes = ['red', 'bold']
    }

    return (
        <div className={style.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;