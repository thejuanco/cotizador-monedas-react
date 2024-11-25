export const formatearDinero = (valor) => {
    //API de js para formatear dinero
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(valor)
}

export const calcularTotalPagar = (cantidad, plazo) => {
    let total 

    //Mientras mayor es la cantidad, menor es el interes
    if (cantidad > 5000) {
        total = cantidad * 1.5;
    } else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    } else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    //plazo - más plazo mayor interes
    if(plazo === 6){
        total = total * 1.1;
    } else if(plazo === 12 ){
        total = total * 1.2;
    } else {
        total = total * 1.3;
    }
    return total;
}