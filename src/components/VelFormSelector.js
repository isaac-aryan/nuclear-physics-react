import React from 'react'
import '../static/FormSelector.css';

export default function VelFormSelector({onFormSubmit, onFormChange}) {

    const handleSubmit = (event)=>{
        event.preventDefault();
        onFormSubmit(event.target.value);
    };

    const handleInputChange = (event)=>{
        onFormChange(event.target.value);
    };

  return (
    <form onSubmit={handleSubmit}>
      <p>To calculate the velocity of an electron in the nth permitted orbit, 2 popular formulas exist.<br/>
      Select the formula you wish to use and click submit.</p>
            <br/>
            <br/>

            <input type="radio" name='formula' id='formula1' value='formula1' onChange={handleInputChange}/>
            <label for='formula1'>
            <h3>1.] Velocity of Electron = Z e^2 / 2 ϵ0 n h</h3>
            <p>where Z = Atomic Number,<br/>e = Charge on an electron, <br/>ϵ0 = Permitivity of free space,<br/>n = Principal Quantum Number, & <br/>h = Planck's Constant</p>
            </label>

            <br/>

            <input type="radio" name='formula' id='formula2' value='formula2' onChange={handleInputChange}/>
            <label for='formula2'>
            <h3>2.] Velocity of Electron = (n x h ) / 2 π Me r</h3>
            <p>where n = Principal Quantum Number,<br/>h = Planck's Constant, <br/>Me = Mass of an electron, & <br/>r = Bohr's Radius</p>
            </label>

            <br/>
            <br/>

            <button type='submit'>CHOOSE FORMULA</button>
    </form>
  )
}
