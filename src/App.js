import './App.css';
import Counter from "./components/counter";
import WelcomeCard from "./components/welcomeCard";
import InfoForm from './components/infoForm';
import React, { useState } from 'react';

function App() {
  /* Below are eventHandlers for the textbox to change the card text */
  const [inputText,setInputText]= useState('');
  const [tempText, setTempText] = useState('');
const handleChange = (e) => {
    setTempText(e.target.value);                          // Update temp only
  };

  const handleBlur = () => {
    setInputText(tempText);                               // Update final on blur (exit)
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setInputText(tempText);                             // Update final on Enter
    }
  };

  return (
    <div className="App">
      <div className="mainContainer">   
        {/* Calls the WelcomeCard Function inside the welcomeCard jsx file */}
        <WelcomeCard Name={inputText}/>
        {/* Calls the Counter Function inside the counter jsx file */}
        <Counter/>
          <p>Name: <input type="text"
          value={tempText}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}></input></p>
          {/* Calls the Infoform Function inside the infoForm jsx file */}
          <InfoForm/>
      </div>
    </div>
  );
}
export default App;
