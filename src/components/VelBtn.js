import React from 'react';
import '../static/Btn.css';

export default function VelBtn({angState, radState, velState, updateState}) {

    const handleVelClick = ()=>{
        updateState(true,false);
    }

  return (
    <>
      <button type='button' onClick={handleVelClick}>Velocity of Electron</button>
    </>
  )
}
