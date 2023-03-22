import { init } from "../helpers/calcularBiseccion";
import Swal from 'sweetalert2'
import { useEffect } from "react";


export const BodyTable = ({valoresIniciales}) => {

  // console.log(valoresIniciales.valueXcubica, valoresIniciales.valueXcuadrada, valoresIniciales.valueX, valoresIniciales.valueK)

  const valores = init(Number(valoresIniciales.valueXcubica), Number(valoresIniciales.valueXcuadrada), Number(valoresIniciales.valueX), Number(valoresIniciales.valueK));
  const solucion = valores[valores.length - 1];

  
  useEffect(() => {
    
    Swal.fire(
      'Solucion',
      `X= ${solucion.fxr}`,
      'success'
    );

  }, [solucion.fxr])
  

 

  return (
      <>
        {
            valores.map( values => (
                <tr key={values.n}>
                    <th  scope="row">{values.n}</th>
                    <td >{values.a}</td>
                    <td >{values.fa}</td>
                    <td >{values.b}</td>
                    <td >{values.fb}</td>
                    <td >{values.xr}</td>
                    <th >{values.fxr}</th>
                    <td >{values.error}</td>


                </tr>
            ))
        }
      </>
  )
}
