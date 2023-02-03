import React, { useState } from "react";
import './Calculator.css';

const Calculator = () => {

  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState();
  const [oparation, setOparation] = useState('');

  function haldelInputOne(event){
    setInputOne(event.target.value);
  }
  function handelInputTwo(event){
    setInputTwo(event.target.value);
  }

  function handelOparation(oparator, oparatorName){
    setOparation(oparatorName);
    let firstInput = parseInt(inputOne);
    let secondInput = parseInt(inputTwo); 
    let result=0;

    if(oparator === '+') result = firstInput + secondInput;
    else if(oparator === '-') result = firstInput - secondInput;
    else if(oparator === '*') result = firstInput * secondInput;
    else if(oparator === '/') result = firstInput / secondInput;

    if(oparator === '/')
      setResult(result.toFixed(2));
    else
       setResult(result);
  }
  
  return (
    <div>
      <input type={"number"} required onChange={haldelInputOne}></input>
      <input type={"number"} required onChange={handelInputTwo}></input>
      <button onClick={() => handelOparation("+", "Addition")}>Add</button>
      <button onClick={() => handelOparation("-", "Subtraction")}>Sub</button>
      <button onClick={() => handelOparation("*", "Multiplication")}>
        Mull
      </button>
      <button onClick={() => handelOparation("/", "Division")}>Div</button>

      <p>
        <u>Result</u>
      </p>
      <p id="result">
        {oparation} : {result}
      </p>
    </div>
  );
};

export default Calculator;
