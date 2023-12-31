import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  //take the input---------------------------------------
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  //clear the screen-------------------------------------
  const clear = () => {
    setResult("");
  }

  //delete the numerical of output or input -------------
  const handleDelete = () => {
    setResult(result.slice(0, -1));
  }

  //calculating the outpur---------------------------------
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error")
    }
  }

  return (
    <div className="App">
      <h1>CodingNinjas Calculator</h1>

      <div className='container'>
        <form>
          <input type="text" value={result} />
        </form>

        {/* buttons */}
        <div className='keypad'>
          <button onClick={clear} id='clear' className='highlight'>AC</button>
          <button onClick={handleDelete} className='highlight'>DEL</button>
          <button name='/' onClick={handleClick} className='highlight'>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className='highlight'>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className='highlight'>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className='highlight'>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id='equal' className='highlight'>=</button>
        </div>

      </div>

    </div>
  );
}

export default App;
