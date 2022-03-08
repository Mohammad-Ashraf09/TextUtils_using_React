import React from 'react';
import './LowerCase.css';

function LowerCase(props) {

    const lowerClickHandler = () =>{
        props.setLower(props.text.toLowerCase());      // sending to parent
    }

    return (
        <>
            <button className='btn btn-success x' onClick={lowerClickHandler}>Convert to Lowercase</button>
        </>
    );
}

export default LowerCase;