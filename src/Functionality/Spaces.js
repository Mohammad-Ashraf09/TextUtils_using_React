import React from 'react'

function Spaces(props) {
    
    const spaceClickHandler = () =>{
        let s = props.text.trim();     // this removes extra spaces from front and end
        
        for(let i=1; i<s.length; i++)
        {
            if(s[i]==' ' && s[i+1]==' ')
            {
                for(let j=i; s[j]==' '; j++)
                {
                    if(s[j+1]!=' ')
                    {
                        s = s.substring(0,i+1) + s.substring(j+1);
                        j=-1;
                    }
                }
            }
        }
        props.setSpace(s);      // sending to parent
        // this below code repeating because when we removed extra spaces its length dereases and that's why we need all this again
        //------------------------------- total length---------
        let content = s;
        let len=s.length
        props.setLength(len);      // sending to parent

        //-------------------------- total letters ----------
        let count=0;
        for(let i=0; i<len; i++)
        {
            if(content[i]!=' ')
                count+=1;
        }
        props.setLetter(count);      // sending to parent
        
        //------------------------ total spaces -------------
        props.setSpaces(len-count);      // sending to parent
    }

    return (
        <>
            <button className='btn btn-success ms-3 s' onClick={spaceClickHandler} style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':''}}>Remove Extra Spaces</button>
        </>
    )
}

export default Spaces