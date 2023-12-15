import React, {useState} from 'react';
import './style.css';


function App() {
const [min, setMin] = useState('');
const [max, setMax] = useState('');
const [randomNum, setRandomNum ] = useState('');

const giveRandomNum = () => {
  setRandomNum(Math.floor(Math.random() * (max-min +1) + min))
}

const resetNum = () => {
  setMax("");
  setMin("");
  setRandomNum("?");
}

  
  return(
     <div className="hero">
       <div className="container">
         <div className="randomNum">
            <p>
             random number: <span>{randomNum}</span>
              </p>
           </div>
           <div className="numContainer">
            <div>
            <p>min number</p>
            <input type="text" value={min} onChange={(e) => setMin(+e.target.value)} />

              </div>
              <div className="ptext">
            <p>max number</p>
            <input type="text" value={max} onChange={(e) => setMax(+e.target.value)} />
            
              </div>
             </div>
             <button onClick={giveRandomNum} >get random number</button>
             <button onClick={resetNum}>reset</button>
         </div>

       </div>
  )
}

export default App;
