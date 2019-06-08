var contador = 10;

function decrementar () {
    if (contador!==0) {
        postMessage(contador); //envío a fuera el contador, enviar al hilo principal el valor de contador
        contador--;
        setTimeout( "decrementar()", 2000 );//Establece una función y un tiempo
    }
}

decrementar();