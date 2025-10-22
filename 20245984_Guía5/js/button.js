function aviso(){
    alert("Bienvendio al mundo JavaScript");
}

function confirmacion(){
//LOs valores que puede almacenra la variable confirmacion
//Son true o false
    let confirmacion = confirm("¿Desea salir de la sesión?");
/* para imprimir una variable en una cadena podemos utilizar las comillas simples
inversas `` y luego hacemos el llamado de la variable con ${aqui debera de escribir el nombre de la variable}
*/
alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("¿Cual es su nombre?");
    //Notese que en campo del promt se mostrara 0 por defecto
    let edad = prompt("¿Cual es su edad?",0);

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la informacion que desea visualizar en el parrafo"
    );

    /*Utilizaremos la api dom para acceder al elemento <p id="idParrafo"></p> que hemos creado en nuestro documento html*/

    const p = document.querySelector("#idParrafo");
    p.innerHTML=parrafo;
}