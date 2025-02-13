// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const amigo = document.getElementById('amigo');
    const nombre = amigo.value.trim();

    if (nombre !== ""){
        amigos.push(nombre);
        alert("amigo agregado");
        actualizarLista();
        amigo.value = "";
    }else{
        alert("Porfavor digite un nombre");
    }
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Se necesitan al menos dos amigos para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const ganador = amigos[indiceAleatorio]; 


    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${ganador}`;
}