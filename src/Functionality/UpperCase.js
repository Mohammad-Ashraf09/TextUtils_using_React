import React from 'react'

function UpperCase(props) {
  
    const upperClickHandler = () =>{
        props.setUpper(props.text.toUpperCase());      // sending to parent
    }

    return (
        <>
            <button className='btn btn-success ms-3' onClick={upperClickHandler}>Convert to Uppercase</button>
        </>
    )
}

export default UpperCase