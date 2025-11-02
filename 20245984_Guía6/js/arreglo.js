//Accedemos al contenedeor donde se mostrarra los estudaintes
    const containerArreglo = document.querySelector("#idContainerArreglo");
    const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

    //Accedemos a cada boton por medio de api dom
    const btnAgregar = document.querySelector("#idBtnAgregar");
    const btnOrdenar = document.querySelector("#idBtnOrdenar");

    //agregamos el evento click a botones
    //Se le asinga funcion que realiza operacion
    btnAgregar.addEventListener("click", agregarElemento);
    btnOrdenar.addEventListener("click", ordenarElementos);

    let arreglo = new Array();

    //creando funciones
    function agregarElemento(){
        const numero = parseInt(document.querySelector("#inputNumero").value);
        //verificando que sea numero

        if(isNaN(numero)){
            alert("Debe ingresar un numero valido")
        } else{
            //agregamos nuevo elemento al arreglo
            arreglo.push(numero);

            //utilizaremos api dom para crear elemento html
            let caja = document.createElement("div");
            caja.className="col-md-1 colum";
            let valor = document.createElement("h3")
            valor.textContent=numero;
            caja.appendChild(valor);

            //inserta nuevo elemento a contenedor, se utuliza beforeend para insertar
            containerArreglo.insertAdjacentElement("beforeend", caja)
        }
    }

    function ordenarElementos(){
        //utilizaermos un for of para recorrer arreglo y sort para ordenar
    
        for (let i of arreglo.sort()){
            let caja = document.createElement("div");
            caja.className="col-md-1 colum-green";
            let valor = document.createElement("h3")
            valor.textContent=i;
            caja.appendChild(valor);
            containerArregloOrdenado.insertAdjacentElement("beforeend", caja)
        }
    }




