import React, { useState } from 'react'
import VelFormSelector from './VelFormSelector';

export default function VelShow() {

    //State that controls the chosen formula
    const[formulaChoice, setFormulaChoice] = useState('');

    const handleFormSubmit = (choice)=>{
        setFormulaChoice(choice);
        console.log('chosen formula: '+formulaChoice);
    };

    const handleFormChange = (change) =>{
        setFormulaChoice(change);
    };

  return (
    <div className='form-field-show'>
      <VelFormSelector onFormSubmit = {handleFormSubmit} onFormChange = {handleFormChange}/>
    </div>
  )
}
