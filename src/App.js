import './App.css';
import { useState, React } from "react";
import { MyContext } from "./context/MyContext";
import Display from './components/Display';
import Control from './components/Control';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <MyContext.Provider value={{ counter, setCounter }}>
        <Display/>
        <Control/>
      </MyContext.Provider>
    </div>
  );
}
export default App;