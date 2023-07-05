import React from 'react'
import '../static/ResultField.css';

export default function RadResult({result}) {

    const RESULT = "Radius = "+result;

  return (
    <div className='result-field'>
        <h1 dangerouslySetInnerHTML={{ __html: RESULT }}></h1>
    </div>
  )
}
