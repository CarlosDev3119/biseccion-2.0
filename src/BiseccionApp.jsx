import React from 'react'
import { FormBiseccion } from './components/FormBiseccion'



export const BiseccionApp = () => {
  
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Biseccion App</h1>
            </div>

            <hr/>
            <label className="fs-5">Ingresa los valores</label>
            
            <FormBiseccion />

            <hr/>
            

            
        </div>
        
    </div>
  )
}
