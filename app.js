let listaAmigos = [];
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtiene el valor ingresado en el campo "escribe un nombre"
    const nombre = input.value.trim(); //limapia ese valor de espacios en blanco al inicio y al final
    if (nombre === ''){
        alert('Por favor, ingresa un nombre válido.'); // Si el campo está vacío, muestra un mensaje de alerta
        return;
    }

    if(listaAmigos.includes(nombre)){
        alert('Este nombre ya fue ingresado.'); // Si el nombre ya está en la lista, muestra un mensaje de alerta
        return;
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista de amigos
    actualizarLista(); // Actualiza la lista de amigos en la pantalla
    input.value = ''; // Limpia el campo de texto
}

