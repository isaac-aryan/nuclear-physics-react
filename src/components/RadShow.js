import React, { useState, useEffect } from 'react'
import RadCalculator from './RadCalculator'

//Physics functionality
import * as phy from '../physics';
import RadResult from './RadResult';

export default function RadShow() {
    //Result Field Visibility
    const [resShow, setResShow] = useState(false);

    //For Calculations
    const [quantnum, setQuantNum] = useState(1);
    const [atomicnum, setAtomicNum] = useState(1);
    const [result, setResult] = useState(0);

    //Function will Receive the result and render the result field component passing the result as a prop and format the result.
    const calculateOnSubmit = (n, z)=>{
        setResShow(true);

    };

    //Calculation
    useEffect(() => {
        const calculatedResult = phy.getRad(quantnum, atomicnum); // Perform your calculation here
        setResult(calculatedResult);
        
      }, [quantnum, atomicnum]);


    const handleNumChange = (n,z)=>{
        setQuantNum(n);
        setAtomicNum(z);
    }; 




  return (
    <div className='form-field-show'>
      <RadCalculator onValSubmit = {calculateOnSubmit} onNumChange = {handleNumChange}/>

      {resShow && <RadResult result = {result}/>}
    </div>
  )
}
