//Accedemos al contenedeor donde se mostrarra los estudaintes
const containerResultado = document.querySelector("#idContainerResultado");

//Accedemos a cada boton por medio de api dom
const btnCalcular = document.querySelector("#idBtnCalcular");

//agregamos el evento click a calcular
//Se le asinga funcion que realiza operacion
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla(){
    //Capturando valor del campo
    const inputTabla = document.querySelector("#inputTabla").value;
    
    //inicializa contador
    let contador =1;

    //verifiquemmos que el dato colocado sea numero entero positivo
    if(inputTabla > 0){
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;
        //utilizaremos do while para generar tabla multiplicar
        //que el usuario ha indicado
        do{
            let resultado = contador * inputTabla;
                tabla +=`<div class="row text-center">`;
                tabla +=`<div class="col-md-1 colum"><h3>${contador}</h3></div>`;
                tabla +=`<div class="col-md-1 colum-green"><h3>x</h3></div>`;
                tabla +=`<div class="col-md-1 colum"><h3>${inputTabla}</h3></div>`;
                tabla +=`<div class="col-md-1 colum-green"><h3>=</h3></div>`;
                tabla +=`<div class="col-md-1 colum"><h3>${resultado}</h3></div>`;
                tabla +=`<div>`;

                //incrementamos valor de contador
                //para que podamos salir del bucle do while
                contador++;
        } while (contador <=12);
        
        document.querySelector("#inputTabla").value=1;
        document.querySelector("#inputTabla").focus();
        containerResultado.innerHTML=tabla;
    } else{
            alert("No se ha ingresado un número válido");
        }
    }
