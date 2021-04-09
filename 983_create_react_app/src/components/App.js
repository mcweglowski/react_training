import './App.css';
import React from "react";
import SwitchButton from './SwitchButton';

function App() {
  const [time, setTime] = React.useState(0);
  const [active, setActive] = React.useState(false);

  const idInterval = React.useRef(0);

  function handleClick(e) {
    if (active) {
      console.log("clearInterval")
      console.log(idInterval.current)
      clearInterval(idInterval.current);
      console.log(idInterval.current)
    } else {
      console.log("setInterval")
      idInterval.current = setInterval(() => addSecond(), 1000);
    }

    setActive(!active);
  }

  function addSecond() {
    setTime(t => t + 1);
  }

  return (
    <div className="App">
      <p>Time: {time}</p>
      <SwitchButton handleClick={handleClick} active={active}/>
    </div>
  );
}

export default App;


      // <p>Time: {time}</p>
      // <button onClick={() => setTime(time + 1)}>Time</button>
      // <p>Active: {active.toString()}</p>
      // <button onClick={() => setActive(!active)}>Active</button>
