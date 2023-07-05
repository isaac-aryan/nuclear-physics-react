
import '../static/Btn.css';

export default function AngBtn({angState, radState, velState, updateState}) {

    //Angular Momentum Field visibility
    

    const handleAngClick = ()=>{
        updateState(true,false);
    }

  return (
    <>
        <button type='button' onClick={handleAngClick}>Angular Momentum</button>
    </>
  )
}
