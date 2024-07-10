import './App.css';
import {useState} from "react";
import React from 'react';

const App =()=> {
  const [input ,setInput]=useState("");
  const [result,setResult]=useState("");

  const handleClick =(value)=>{
    setInput((prev)=>prev+value);
  };

  const clearInput =() =>{
    setInput("");
    setResult("");
  };
  const calculateResult =()=>{
    try{
      setResult(eval(input));
    }catch(error){
      setResult("error");
    }
  };
  return (
    <div className='calculator'>
      <h1> calculator</h1>
      <div className="display">
        <div className="input">input: {input}</div>
        <div className="result">result:{result}</div>
      </div>

      <div className="buttons">
        <button onClick={()=>handleClick("1")}>1</button>
        <button  onClick={()=>handleClick("2")}>2</button>
        <button onClick={()=>handleClick("3")}>3</button>
        <button onClick={()=>handleClick("+")}>+</button>
        <button onClick={()=>handleClick("4")}>4</button>
        <button  onClick={()=>handleClick("5")}>5</button>
        <button  onClick={()=>handleClick("6")}>6</button>
        <button onClick={()=>handleClick('-')}>-</button>
        <button onClick={()=>handleClick("7")}>7</button>
        <button onClick={()=>handleClick("8")}>8</button>
        <button onClick={()=>handleClick("9")}>9</button>
        <button onClick={()=>handleClick("*")}>*</button>
        <button onClick={()=>handleClick("0")}>0</button>
        <button onClick={()=>handleClick(".")}>.</button>
        <button onClick={()=>clearInput()}>C</button>
        <button onClick={()=>handleClick("/")}>/</button>
        <button onClick={calculateResult}>=</button>
      </div>
 </div>
  );
}

export default App;
