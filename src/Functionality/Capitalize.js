import React from 'react';

function Capitalize(props) {
    
    const capitalizeClickHandler = () =>{
        let x=props.text.toLowerCase();
        let s=props.text[0].toUpperCase()+x.substring(1);
        
        for(let i=1; i<s.length; i++)
        {
            if(s[i]==' ')
                s = s.substring(0,i+1) + s[i+1].toUpperCase() + s.substring(i+2);
        }
        props.setCapital(s);      // sending to parent
    }

    return (
        <>
            <button className='btn btn-success ms-3 c' onClick={capitalizeClickHandler} style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':''}}>Capitalize Every Word</button>
        </>
    )
}

export default Capitalize