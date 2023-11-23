   'use strict'

   function validarTaxi(taxi) {
   
    if (taxi  ('anioFabricacion')) {
       
    }
    let anioActual = 2023;
    let vidaUtil = anioActual - taxi.anioFabricacion;

    return vidaUtil < 10;
}


let taxi1 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anioFabricacion: 2015,
   
};

let resultado = validarTaxi(taxi1);
alert (resultado); 

