import React from 'react';

function LowerCase(props) {

    const lowerClickHandler = () =>{
        props.setLower(props.text.toLowerCase());      // sending to parent
    }

    return (
        <>
            <button className='btn btn-success l' onClick={lowerClickHandler} style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':''}}>Convert to Lowercase</button>
        </>
    );
}

export default LowerCase;