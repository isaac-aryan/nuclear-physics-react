import React, { useState } from 'react'
import '../static/FormFieldShow.css';
import AngFormSelector from './AngFormSelector';


export default function AngShow() {
    
    //State that handles which formula is chosen
    const [formulaChoice, setFormulaChoice] = useState('');


    //Submission of choice
    const handleFormSubmit = (choice)=>{
        setFormulaChoice(choice);
        console.log(formulaChoice);
    };

    const handleFormChange = (change)=>{
        setFormulaChoice(change);
    };

  return (
    
    <div className='form-field-show'>
        <AngFormSelector onFormSubmit = {handleFormSubmit} onFormChange = {handleFormChange} />

        <div className='calculator-form'>

        </div>
        
    </div>
    
  );
}
