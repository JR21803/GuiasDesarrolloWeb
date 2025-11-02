//Accedemos al contenedeor donde se mostrarra los estudaintes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

//Accedemos a cada boton por medio de api dom
const btnPromedio = document.querySelector("#idBtnPromedio");

//agregamos el evento click a botones
//Se le asinga funcion que realiza operacion
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes(){
    //Utilizaremos un arreglo para guardar la info del estudiante
    let arrayEstudiante = new Array();

    let totalEstudiantes = document.querySelector(
        "#inputNumeroEstudiantes"
    ).value;
    let contador = 1
    
    //Utilizaremos while para recorrer total estudiante
    let estudiante,
    calificacion,
    convertir = 0;
    while(contador <= totalEstudiantes){
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`)
        
        //verificar que sea un valor entero positivo y rango de 0-10

        do{
            calificacion=prompt(
                `Ingrese la calificación del estudiante ${contador}`
            );

            convertir=parseFloat(calificacion);
        } while(isNaN(convertir) || convertir <0 || convertir>10);

        //asignado valores al arreglo
        arrayEstudiante[contador-1]=new Array(
            estudiante,
            parseFloat(calificacion).toFixed(2)
        );
        contador++;
    } 

    //recorriendo el arreglo con for..of
    //verificaremos cual es el promedio de las calificaciones
    //y cual de los estudiantes posee la calificaion mas alta

    let calificacionAlta =0,
    promedio=0,
    posicion=0;

    let listado = "<h3>Listado de estudiantes registrados</h3>"
    listado += "<ol>";
    for(let indice of arrayEstudiante){
        let nombre = indice[0];
        let nota = indice[1];
        //imprimiendo lista de estudiantes
        listado += `<li><b>Nombre</b> ${nombre} - <b>Calificación: </b> ${nota}</li>`

        //verificacion de calificacion mas alta
        if(nota>calificacionAlta){
            posicion=indice
        }
        
        //calculando el promedio
        promedio += parseFloat(nota)
    }
    listado +="</ol";
    promedio= parseFloat(promedio / arrayEstudiante.length).toFixed(2);
    listado +=`<p><b>Promedio de calificaciones: </b>${promedio}`;
    listado +=`<br><b>Estudiante con mejor calificación: </b>${posicion[0]}</p>`;
    
    //imprimiendo resultado
    containerEstudiantes.innerHTML=listado;
}

    