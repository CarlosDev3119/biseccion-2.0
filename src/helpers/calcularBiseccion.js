export const procesoNegativo = (ax, bx, cx, k) => {

    let datos = [];

    for( let i = -5; i <= 5; i++ ){

        let operacion = (ax * Math.pow(i, 3)) + (bx * Math.pow(i, 2)) + ( cx * i ) + k;

        
        // console.log(`${i}\t${operacion}`)
        datos.push({a:i, fa:operacion});
        
        if( datos.length > 2){
            datos.splice(0, 1);
        }
        
        if(operacion > 0){
            return datos
        }
    }
}

export const procesoPositivo = (ax, bx, cx, k) => {

    let datos = [];

    for( let i = -5; i <= 5; i++ ){

        let operacion = (ax * Math.pow(i, 3)) + (bx * Math.pow(i, 2)) + ( cx * i ) + k;

        
        // console.log(`${i}\t${operacion}`)
        datos.push({a:i, fa:operacion});
        
        if( datos.length > 2){
            datos.splice(0, 1);
        }
        
        if(operacion < 0){
            return datos
        }
    }
}

export const tablaBiseccion = (a, fa, b, fb, ax , bx , cx , k) => {
    
    let flag = true;
    let n = 1;
    let infoTabla = []
    
    let aAux = 0, faAux = 0, bAux = 0, fbAux = 0, xR, error, fxrAux, fxr = 0 ;

    // console.log(`n \t  a \t\t\t f(a) \t\t  b \t\t\t f(b) \t\t XR \t\t f(xr) \t\t EA \n`);
  
    while( flag ){

        aAux = a;
        faAux = fa;
        bAux = b;
        fbAux = fb;
        fxrAux = fxr
        xR = (a + b)/2

        fxrAux = (ax * Math.pow((xR), 3)) + (bx * Math.pow((xR), 2)) + ( cx * (xR) ) + k;
        //header
        //primer valor del error es nulo por que no existe
        if( n === 1 ){
   
            error = null;
            // console.log(`${n} \t${Number(aAux).toFixed(6)} \t\t ${Number(faAux).toFixed(6)} \t ${Number(bAux).toFixed(6)} \t\t ${Number(fbAux).toFixed(6)} \t ${Number(xR).toFixed(6)} \t ${Number(fxrAux).toFixed(6)} \t ${Number(error).toFixed(6)}`);
            infoTabla.push({n: n , a: Number(aAux).toFixed(6), fa: Number(faAux).toFixed(6), b: Number(bAux).toFixed(6), fb: Number(fbAux).toFixed(6), xr: Number(xR).toFixed(6), fxr: Number(fxrAux).toFixed(6), error: Number(error).toFixed(6) })
        }else{
            
            error = fxrAux - fxr;
            if(error < 0) error = error * -1;
            if(error <= 0.0001){
                flag = false;
                return infoTabla
            }
            // console.log(`${n} \t${Number(aAux).toFixed(6)} \t\t ${Number(faAux).toFixed(6)} \t ${Number(bAux).toFixed(6)} \t\t ${Number(fbAux).toFixed(6)} \t ${Number(xR).toFixed(6)} \t ${Number(fxrAux).toFixed(6)} \t  ${Number(error).toFixed(6)}`);
            infoTabla.push({n: n , a: Number(aAux).toFixed(6), fa: Number(faAux).toFixed(6), b: Number(bAux).toFixed(6), fb: Number(fbAux).toFixed(6), xr: Number(xR).toFixed(6), fxr: Number(fxrAux).toFixed(6), error: Number(error).toFixed(6) })
            
            
        }
        if(ax < 0){
            if(fxrAux < 0) {
                a = xR;
                fa = fxrAux; 
                fxr = fxrAux;
            }else{
                b = xR;
                fxr = fxrAux;
                fb = fxr;
            }
        }else{
            if(fxrAux > 0) {
                a = xR;
                fa = fxrAux; 
                fxr = fxrAux;
            }else{
                b = xR;
                fxr = fxrAux;
                fb = fxr;
                
            }
        }
        
        // console.log({bAux, b})        
        n++;
    }


}


export const init = (ax = 1, bx = 2, cx = 10, k = -20, inicial = -5) => {

    let operacion = 0;
    let first_i = inicial;
    let signo;
    
 
    let valoresTabla;
    operacion = (ax * Math.pow((first_i), 3)) + (bx * Math.pow((first_i), 2)) + ( cx * (first_i) ) + k;
    
    operacion = operacion.toString();
    signo = operacion.split('-');
    
    
    if( signo.length > 1 ){
        valoresTabla = procesoNegativo( ax, bx, cx, k );
    }else{
        valoresTabla = procesoPositivo( ax, bx, cx, k );
    }
    
    // console.log( valoresTabla );
    const [valoresDeA, valoresDeB] = valoresTabla;
    
    //desestructurar a fa, b, fb
    
    const { a: aCalculada, fa: faCalculada } = valoresDeA;
    const { a: bCalculada, fa: fbCalculada } = valoresDeB;
    
    
    const infoTabla = tablaBiseccion(aCalculada, faCalculada, bCalculada, fbCalculada, ax , bx , cx , k );
    
    return infoTabla;
}



