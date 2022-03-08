import React, { useState } from 'react'
import './TextForm.css'
import Capitalize from './Functionality/Capitalize';
import LowerCase from './Functionality/LowerCase';
import Spaces from './Functionality/Spaces';
import UpperCase from './Functionality/UpperCase';



function TextForm(props) {
  
    const [text, setText] = useState("");
    const [len, countLength] = useState(0);
    const [letter, countLetter] = useState(0);
    const [space, countSpace] = useState(0);
    const [word, countWord] = useState(0);

    const changeHandler = (event) =>{
        let content = event.target.value;
        
        //------------------------------- total length---------
        let len=event.target.value.length
        countLength(len);

        //-------------------------- total letters ----------
        let count=0;
        for(let i=0; i<len; i++)
        {
            if(content[i]!=' ')
                count+=1;
        }
        countLetter(count);
        
        //------------------------ total spaces -------------
        countSpace(len-count);

        //------------------------- total words --------
        let str = content;
        str = str.trim();
        
        for(let i=1; i<str.length; i++)
        {
            if(str[i]==' ' && str[i+1]==' ')
            {
                for(let j=i; str[j]==' '; j++)
                {
                    if(str[j+1]!=' ')
                    {
                        str = str.substring(0,i+1) + str.substring(j+1);
                        j=-1;
                    }
                }
            }
        }
        let words=0;
        for(let i=1; i<str.length; i++)
        {
            if(str[i]==' ')
                words++;
        }
        countWord(words+1);
        //-------------------------------------------------------------

        setText(event.target.value);
    }


    const fun1 = (s) =>
    {
        setText(s);
    }
    const fun2 = (s) =>
    {
        setText(s);
    }
    const fun3 = (s) =>
    {
        setText(s);
    }
    const fun4 = (s) =>
    {
        setText(s);
    }
    const fun5 = (s) =>
    {
        countLength(s);
    }
    const fun6 = (s) =>
    {
        countLetter(s);
    }
    const fun7 = (s) =>
    {
        countSpace(s);
    }
    const fun8 = () =>
    {
        setText("");
        countLength(0);
        countLetter(0);
        countSpace(0);
        countWord(0);
    }
    
    return (
    <div>
        <div className="mb-3 my-5">
            <h2>{props.heading}</h2>
            <textarea className="form-control" placeholder='Enter Text Here...' value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
            <div className='length'>
                <div>Length (including extra spaces) : {len}</div>
                <div>Total Letters (including symbols) : {letter}</div>
                <div>Total Spaces : {space}</div>
                <div>Total Words : {word}</div>
            </div>
        </div>
        
        <LowerCase text={text} setLower={fun1}/>
        <UpperCase text={text} setUpper={fun2}/>
        <Capitalize text={text} setCapital={fun3}/>
        <Spaces text={text} len={len} letter={letter} space={space} word={word} setSpace={fun4} setLength={fun5} setLetter={fun6} setSpaces={fun7} />
        <button className='btn btn-success x ms-3' onClick={fun8}>Remove Text</button>

    </div>
  );
}

export default TextForm;