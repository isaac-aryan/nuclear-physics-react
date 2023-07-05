import React, { useState, useEffect } from 'react'
import '../static/CalculatorField.css';

export default function RadCalculator({onValSubmit, onNumChange}) {

    //Handling values
    const [inputQuantNum, setInputQuantNum] = useState(0);
    const [inputAtomicNum, setInputAtomicNum] = useState(0);

    //Sending the values to RadShow where the calculations will happen
    const handleQuantNumChange = (event)=>{
        setInputQuantNum(Number(event.target.value));
    }

    const handleAtomicNumChange = (event)=>{
        setInputAtomicNum(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onNumChange(inputQuantNum, inputAtomicNum); // Pass the numbers back to the Parent component
        onValSubmit();
      };

    useEffect(() => {
        // Update the number values in the parent component whenever they change
        onNumChange(inputQuantNum, inputAtomicNum);
    }, [inputQuantNum, inputAtomicNum, onNumChange]);

    
  return (
    <div id="bohrs-rad-formula">
        <p>The formula this app uses to compute Bohr's radius is the following:</p>
        <h3>Bohr's Radius = (n<sup>2</sup> x h<sup>2</sup> x ε<sub>0</sub>) / (π x Me x Z x e<sup>2</sup>)</h3>
        <p>where n = Principal Quantum Number,<br/>h = Planck's Constant,<br/> ε<sub>0</sub> = Permitivity of Free Space,<br/>Me = Mass of Electron,<br/>Z = Atomic Number, <br/>e = Charge on an electron</p>

        <div className='calculator-wrapper'>
        <form className='calculator' onSubmit={handleSubmit}>
            <p>Calculate Bohrs radius:</p>
            <label for="quantum-number">Principal Quantum Number = </label>
            <input type="number" id="quantum-number" min='1' value={inputQuantNum} onChange={handleQuantNumChange}/><br/>

            <label for="atomic-number">Atomic Number of Element = </label>
            <input type="number" id="atomic-number" min='1' max='118' value={inputAtomicNum} onChange={handleAtomicNumChange}/><br/>

            <br/>
            <button type='submit' className='calculateBtn'>CALCULATE</button>
            <br>
            </br>
        </form>
        </div>

    </div>

  )
}
