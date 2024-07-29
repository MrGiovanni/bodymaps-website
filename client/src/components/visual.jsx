import React from 'react'
import { useRef, useEffect } from 'react'
import { setup } from '../helpers/helpers';

import './visual.css';



function Visual({ niftiURL }) {
  const axial_ref = useRef(null);
  const sagittal_ref = useRef(null);
  const coronal_ref = useRef(null);
  
  useEffect(() => {
    if (axial_ref && sagittal_ref && coronal_ref){
      console.log("setup");  
      setup(axial_ref, sagittal_ref, coronal_ref, niftiURL);
    }  
    }, [])
 
  return ( 
    <div className="Visual">
        <div className="viewport">
          <div className="axial" ref={axial_ref}></div>
          <div className="sagittal" ref={sagittal_ref}></div>
          <div className="coronal" ref={coronal_ref}></div>
        </div>
    </div>
  )
}

export default Visual