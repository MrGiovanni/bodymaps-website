import React from 'react'
import { useRef, useEffect} from 'react'
import { renderVisualization } from '../helpers/helpers';
import './Visual.css';

function Visual({ niftiURL, filename }) {
  const axial_ref = useRef(null);
  const sagittal_ref = useRef(null);
  const coronal_ref = useRef(null);
  const volume3D_ref = useRef(null);
  
  useEffect(() => {              //TODO: Need to not make a new renderingEngine on every render. 
    (async () => {
      if (axial_ref && sagittal_ref && coronal_ref){
        console.log("setup");  
        // renderVisualization(axial_ref, sagittal_ref, coronal_ref, niftiURL);
        renderVisualization(axial_ref, sagittal_ref, coronal_ref, volume3D_ref, niftiURL);
      }  
    }) ();
    }, [])
 
  return ( 
    <div className="Visual">
        <div className="viewport">
          <div className="axial" ref={axial_ref}></div>
          <div className="sagittal" ref={sagittal_ref}></div>
          <div className="coronal" ref={coronal_ref}></div>
          <div className="3D" ref={volume3D_ref}></div>
        </div>
    </div>
  )
}

export default Visual