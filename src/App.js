import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// rfce
function App() {
  return (
    <div className='bg'>
      <Navbar title="TextUtils" aboutText="About" />
      <div className='container'>
        <TextForm heading="Enter text to analyze" />  
      </div>
    </div>
  );
}

export default App;
