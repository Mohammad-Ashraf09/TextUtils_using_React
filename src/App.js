import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
// rfce
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#23382b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#e6e200';
    }
  }
  
  
  return (
    <div className='bg'>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div  className={`form-check form-switch text-${mode==='light'?'dark':'light'} in-body`}>
        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode==='light'?'Dark Mode':'Light Mode'}</label>
      </div>
      <div className='container'>
        <TextForm heading="Enter text to analyze" mode={mode} />  
      </div>
    </div>
  );
}

export default App;
