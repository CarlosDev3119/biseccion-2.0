import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { BodyTable } from "./BodyTable";

import { ScreenLoading } from "./ScreenLoading";


export const FormBiseccion = () => {

    
    const [state, setState] = useState(false);

    const [form, setForm] = useState({
        valueXcubica: 0,
        valueXcuadrada: 0,
        valueX: 0,
        valueK: 0,
        bInicial: 0
    });

    const [formValues, handleInputChange, reset] = useForm({
        valueXcubica: '',
        valueXcuadrada: '',
        valueX: '',
        valueK: '',
        bInicial: ''
    });

    const {
        valueXcubica,
        valueXcuadrada,
        valueX,
        valueK, bInicial} = formValues;

    

    const handleCalcular = () => {
        // const valores = init(valueXcubica,valueXcuadrada, valueX, valueK);
        setForm({
            valueXcubica,
            valueXcuadrada,
            valueX,
            valueK
        })
        
        setState(true);
        reset();
    }
    


  return (
    <>

       
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="ax" className="col-form-label">X<sup>3</sup></label>
            </div>
            <div className="col-auto">
                <input 
                    type="number" 
                    id="ax" 
                    className="form-control" 
                    placeholder="Ingresa el valor de x3"
                    name="valueXcubica"
                    value={valueXcubica}
                    onChange={handleInputChange}
                />
            </div>

        </div>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="bx" className="col-form-label">X<sup>2</sup></label>
            </div>
            <div className="col-auto">
                <input 
                    type="number" 
                    id="bx" 
                    className="form-control" 
                    placeholder="Ingresa el valor de x²"
                    name="valueXcuadrada"
                    value={valueXcuadrada}
                    onChange={handleInputChange}
                />
            </div>
        </div>

        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="cx" className="col-form-label">X </label>
            </div>
            <div className="col-auto">
                <input 
                    type="number" 
                    id="cx" 
                    className="form-control" 
                    placeholder="Ingresa el valor de x"
                    name="valueX"
                    value={valueX}
                    onChange={handleInputChange}
                />
            </div>
        </div>

        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="k" className="col-form-label">K </label>
            </div>
            <div className="col-auto">
                <input 
                    type="number" 
                    id="k" 
                    name="valueK"
                    className="form-control"  
                    placeholder="Ingresa el valor de K"
                    value={valueK}
                    onChange={handleInputChange}
                />
            </div>
        </div>

        {/* campo de b  */}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="bInicial" className="col-form-label">b Inicial </label>
            </div>
            <div className="col-auto">
                <input 
                    type="number" 
                    id="bInicial" 
                    name="bInicial"
                    className="form-control"  
                    placeholder="Ingresa el valor inicial de b"
       
                />
            </div>
        </div>

      
        <button
            disabled={(valueXcubica === '' )? true: false}
            className="btn btn-primary mt-4 md-4"
            onClick={handleCalcular}
        >Calcular</button>
        {
            (!state)
                ?    <ScreenLoading /> 
                :<table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">a</th>
                    <th scope="col">f(a)</th>
                    <th scope="col">b</th>
                    <th scope="col">f(b)</th>
                    <th scope="col">Xr</th>
                    <th scope="col">f(xr)</th>
                    <th scope="col">EA</th>
                    </tr>
                </thead>
                <tbody>
                    
                       <BodyTable valoresIniciales={form}/>
           
                </tbody>
            </table>
        }
   
    </>
  )
}

            