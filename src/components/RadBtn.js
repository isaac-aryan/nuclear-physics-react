import React from 'react';
import '../static/Btn.css';

export default function RadBtn({angState, radState, velState, updateState}) {

    const handleRadClick = ()=>{
        updateState(true,false);
    }

  return (
    <>
      <button type='button' onClick={handleRadClick}>Bohr's Radius</button>      
    </>
  )
}
