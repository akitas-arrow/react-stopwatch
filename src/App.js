import React from 'react';
import './App.css';
import Controls from './components/Controls';
import Timer from './components/Timer';

const App = () => {
  const timer = "時間"
  const buttonList = [
    {name: "Start", id: "start"},
    {name: "Stop", id: "stop"},
    {name: "Reset", id: "reset"}
  ]
  return (
    <div className="container">
      <Timer timer={timer}/>
      <div className="controls">
        {buttonList.map(button => 
          (
            <Controls name={button.name} id={button.id} key={button.id}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;
