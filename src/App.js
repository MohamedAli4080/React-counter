
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timer,setTimer]=useState(0);

  const [count,setCount]=useState(0);

  const startTimer=()=>{
    setTimer(10);
    setCount(0);
    
  }
  useEffect(() => {
    if (timer===0) return;

      var interval=setInterval(() => {
          setTimer(c=>c-1);
      }, 1000);

    
      return () => {
        console.log('destroy');
        clearInterval(interval);
      };
  }, [timer])
  
  const click=()=>{
    if (timer>0)
      setCount(c=>c+1);
  }
  const reset=()=>{
    setTimer(10);
    setCount(0);

  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Timer :{timer}</h2>
        <h2>Count :{count}</h2>
        <button onClick={startTimer}>start</button>
        <button onClick={click}>Click</button>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
