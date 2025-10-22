//generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random()*25)+1;
//Creamos una constante que permite identificar el maximo de intentos
const numeroIntentos = 3
//Guardara el numero de intentos que realiza el usuario
let intentos = 1;
function generarNumeroAleatorio(){
    //definimos una variable para impresion de mensajes
    let mensaje;
    //utilizamos el dom para acceder al parrafo creado
    const parrafo = document.querySelector("#idParrafo");


//verificamos en que intento esta el usuario
if(intentos <= numeroIntentos){
    let numero = prompt(
        "¿Qué número se ha generado (Intento " + intentos +")?"
    );
//Verifcamos el numero aleatorio con el ingresado por el usuario
if (numero == numeroAleatorio){
    mensaje = `¡Es sorprendente, pudiste adivinar el numero oculto (${numeroAleatorio})
    Refresque la página para volver a jugar.`;
} else if (intentos == numeroIntentos){
    mensaje = `Su numero de intentos ha terminado. 
    El numero oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar. `;
} else {
    //Decir si número a adivinar esta más alto o más bajo.
if(numero >= numeroAleatorio){
    mensaje = `El número a adivinar se encuentra más abajo. Vuelve a intentar. Quedan ${
        numeroIntentos - intentos
    } intentos`
} else {
    mensaje = `El número a adivinar se encuentra más arriba. Vuelve a intentar. Quedan ${
        numeroIntentos - intentos
    } intentos`
}
}

    //aumentamos el valor de los intentos
    intentos++;
} else {
    mensaje = `Su numero de intentos ha terminado.
    El numero oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
}
 parrafo.innerHTML = mensaje;
}

