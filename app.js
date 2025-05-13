



// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



//lista de amigos
let listaDeAmigos = [];

//se llama a la funcion al hacer click en el boton agregar amigo
function agregarAmigo() {

    //seleccionamos la etiqueta ul que mostrara la lista en la pantalla    
    let listaPantalla = document.getElementById('listaAmigos');
    //selector de input
    let amigo = document.getElementById('amigo').value;
    //mostramos el nombre del amigo agregado en la lista de la pantalla
    

    //si el input no esta vacio
    if (amigo != '') {
        //agregamos amigo a la lista de amigos
        listaDeAmigos.push(amigo);
        //mostramos en la lista de la pantalla, la lista de amigos
        listaPantalla.innerHTML = listaDeAmigos;
        console.log(listaDeAmigos);
        listaPantalla.innerHTML = listaDeAmigos.join('<br>'); //agrega un salto de linea al visualizar la lista en la pantalla

    //si el input esta vacio   
    } else {
        //mostramos en pantalla
        alert('No has agregado un amigo');
    }
    //borramos el input para poner un nuevo amigo
    document.getElementById('amigo').value = '';
    return;   
}

//se llama al clickear sortear amigo
function sortearAmigo() {
    // si no hay amigos agregados y damos click al boton sortear amigo
    if (listaDeAmigos.length == 0) {
        alert('no hay amigos agregados'); //muestra
        return; //y regresa
    } else if (listaDeAmigos.length == 1) {
        alert('solo has agregado un amigo');
        return;
    }

    //de que tamaño es la lista de amigos
    console.log(listaDeAmigos.length);
    //selecciona un numero random entre el 0 al 0.99
    let index = Math.random();
    console.log(`math.random ${index}`);    
    //selecciona un numero random sin decimales del 0 al 0.99
    let index2 = Math.floor(Math.random());
    console.log(`math.floor(math.random()) ${index2}`);
    //selecciona un numero entre 0 y (lista.length - 1), lo cual entra en los indices
    let index3 = Math.floor(Math.random() * listaDeAmigos.length);
    console.log(`math.floor(math.random() * (lista.length - 1) ) ${index3}`);  
    //selecciona el indice de math.floor(math.random() * longitud de la lista)
    let nombre = listaDeAmigos[index3];
    //muestra el indice
    console.log(nombre);
    //selecciona la lista de la pantalla
    let amigo = document.getElementById('listaAmigos');
    //deja en blanco la lista de la pantalla al clickear el boton sortear 
    amigo.innerHTML = '';
    //selecciona la otra ul con ID reultado para mostrar el indice sorteado      
    let resultado = document.getElementById('resultado');
    //muestra el indice que salio en el sorteo 
    resultado.innerHTML = nombre;
    return nombre;
}

