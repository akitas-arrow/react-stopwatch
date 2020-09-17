import React,{ useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Timer from './components/Timer';

const App = () => {
  const [ timer, setTimer ] = useState(0)

  return (
    <div className="container">
      <Timer timer={timer}/>
      <Controls setTimer={setTimer}/>
    </div>
  );
}

export default App;
