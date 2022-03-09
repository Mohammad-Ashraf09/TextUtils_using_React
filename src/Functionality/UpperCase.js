import React from 'react'

function UpperCase(props) {
  
    const upperClickHandler = () =>{
        props.setUpper(props.text.toUpperCase());      // sending to parent
    }

    return (
        <>
            <button className='btn btn-success ms-3 u' onClick={upperClickHandler} style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':''}}>Convert to Uppercase</button>
        </>
    )
}

export default UpperCase