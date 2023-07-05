import React from 'react'
import '../static/FormSelector.css';

export default function AngFormSelector({onFormSubmit ,onFormChange}) {

    const handleSubmit = (event)=>{
        event.preventDefault();
        onFormSubmit(event.target.value);
    };

    const handleInputChange = (event) => {
        onFormChange(event.target.value);
    };

    
  return (
    <form onSubmit={handleSubmit}>
            <p>To calculate angular momentum, 2 popular formulas exist. They make up one of the most important postulates of Bohr's Atomic Model.<br/>Select the formula you wish to use and click submit.</p>
            <br/>
            <br/>

            <input type="radio" id="formula1" name="formula" value="formula1" onChange={handleInputChange}/>
            <label for="formula1">
                <h3>1.] Angular Momentum = Me x Ve x r</h3>
                <p>where Me = Mass of electron,<br/>Ve = Velocity of the electron, & <br/>r = Bohr's radius of that particular orbit</p>
            </label>
        
            <br/>

            <input type="radio" id="formula2" name="formula" value="formula2" onChange={handleInputChange}/>
            <label for="formula2">
                <h3>2.] Angular Momentum = (n x h ) / 2 π</h3>
                <p>where n = Principal Quantum Number,<br/>h = Planck's Constant</p>
            </label>

            <br/>
            <br/>

            <button type='submit' className='formula-btn'>CHOOSE FORMULA</button>
    </form>
  )
}
