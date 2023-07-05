//React
import React, { useState } from 'react'
//import { useState } from 'react';

//Styling
import './App.css';

//Components
import NavBar from './components/NavBar';
import AngBtn from './components/AngBtn';
import RadBtn from './components/RadBtn';
import VelBtn from './components/VelBtn';
import AngShow from './components/AngShow';
import RadShow from './components/RadShow';
import VelShow from './components/VelShow';

export default function App() {

    const [isAngShow, setAngShow] = useState(false);
    const [isRadShow, setRadShow] = useState(false);
    const [isVelShow, setVelShow] = useState(false);

    //Option Button Handlers
    const AngSectionButtonClicked = (toggleON, toggleOFF) =>{
        setAngShow(toggleON);
        setRadShow(toggleOFF);
        setVelShow(toggleOFF);
    };

    const RadSectionButtonClicked = (toggleON, toggleOFF) =>{
        setRadShow(toggleON);
        setAngShow(toggleOFF);
        setVelShow(toggleOFF);
    };

    const VelSectionButtonClicked = (toggleON, toggleOFF) =>{
        setVelShow(toggleON);
        setAngShow(toggleOFF);
        setRadShow(toggleOFF);
    };


  return (
    <div>

      <NavBar/>

      <div className='option-menu'>
        <AngBtn 
        angState = {isAngShow} radState = {isRadShow} velState = {isVelShow}
        updateState = {AngSectionButtonClicked}/>

        <RadBtn
        angState = {isAngShow} radState = {isRadShow} velState = {isVelShow}
        updateState = {RadSectionButtonClicked}/>

        <VelBtn
        angState = {isAngShow} radState = {isRadShow} velState = {isVelShow}
        updateState = {VelSectionButtonClicked}/>
      </div>

        <div className='form-field'>
            {isAngShow && <AngShow/>}
            {isRadShow && <RadShow/>}
            {isVelShow && <VelShow/>}
        </div>


    </div>
  );

}
