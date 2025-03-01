// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
if (amigo === "") {
  alert("Debes ingresar un nombre de amigo");
   return;
    }else{
  lista.push(amigo);
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
  console.log(lista);
    mostrarAmigos();
  return;
  }

}

function mostrarAmigos() {
let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = "";
for (let i = 0; i < lista.length; i++) {
  let item= document.createElement("li");
    item.textContent = lista[i];
    listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (lista.length < 2) {
        alert("Debes ingresar al menos dos amigo");
        return;
    }else{  let resultado = Math.floor(Math.random() * lista.length);
  let ganador = lista[resultado];
  alert("El ganador es: " + ganador);
Limpiar();
    return;
    }   
}

function Limpiar() {
  lista = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}