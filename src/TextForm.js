import React, { useState } from 'react'
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
        let str = content;
        let enter=0;
        for(let i=1; i<str.length; i++)
        {
            if(str[i]==='\n')    // counting number of enter in string
                enter++;
        }
        let len=event.target.value.length
        countLength(len-enter);  // now removing that enter from length so that string length is without enter

        //-------------------------- total letters ----------
        let count=0;
        for(let i=0; i<len; i++)
        {
            if(content[i]!=' ')
                count+=1;
        }
        countLetter(count-enter);
        
        //------------------------ total spaces -------------
        countSpace(len-count);

        //------------------------- total words --------
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
            if(/\s/.test(str[i]))   // this will deal all white spaces (spaces and enter)
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

    const copyHandler = () =>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
    }
    
    return (
    <div>
        <div className="mb-3 my-3">
            <h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
            <textarea id="textbox" className="form-control" placeholder='Enter Text Here...' value={text} onChange={changeHandler} rows="8"
                      style={{backgroundColor:props.mode==='dark'?'#15292b':'white', color:props.mode==='dark'?'grey':''}}>
            </textarea>
            <div className='length' style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':'#556b2f'}}>
                <div>Length (including extra spaces) : {len}</div>
                <div>Total Letters (including symbols) : {letter}</div>
                <div>Total Spaces : {space}</div>
                <div>Total Words : {word}</div>
            </div>
        </div>
        
        <LowerCase text={text} setLower={fun1} mode={props.mode}/>
        <UpperCase text={text} setUpper={fun2} mode={props.mode}/>
        <Capitalize text={text} setCapital={fun3} mode={props.mode}/>
        <Spaces text={text} len={len} letter={letter} space={space} word={word} setSpace={fun4} setLength={fun5} setLetter={fun6} setSpaces={fun7} mode={props.mode}/>
        <button className='btn btn-success ms-3 copy' onClick={copyHandler} style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':''}}>Copy Text</button>
        <button className='btn btn-success ms-3' onClick={fun8} style={{backgroundColor:props.mode==='dark'?'rgb(20 72 61)':''}}>Clear Textbox</button>

    </div>
  );
}

export default TextForm;