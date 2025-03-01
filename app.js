// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];

//funcion para agregar amigos al listado

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Debes ingresar al menos un nombre");
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

//funcion para mostrar amigos en el listado

function mostrarAmigos() {
let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = "";
for (let i = 0; i < lista.length; i++) {
        let item= document.createElement("li");
        item.textContent = lista[i];
        listaAmigos.appendChild(item);
    }
}

//funcion para sortear amigo

function sortearAmigo() {
    if (lista.length === 0 ) {
        alert("Debes ingresar al menos un amigo");
        return;
    }else{  
            let resultado = Math.floor(Math.random() * lista.length);
            let ganador = lista[resultado];
            console.log(resultado);
            console.log(ganador);
            Limpiar();
            return;
        }   
}

//funcion para limpiar listado de amigos

function Limpiar() {
  lista = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}