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

function actualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Obtiene el elemento de la lista de amigos
    lista.innerHTML = ''; // Limpia la lista de amigos

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li'); // Por cada amigo en la lista, crea un elemento de lista
        li.textContent = amigo; // Agrega el nombre del amigo al elemento de lista
        lista.appendChild(li); // Agrega el elemento de lista a la lista de amigos
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debe haber al menos un nombre en la lista para realizar el sorteo.'); // Si no hay amigos en la lista, muestra un mensaje de alerta
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Obtiene un índice aleatorio de la lista de amigos
    const amigoSorteado = listaAmigos[indiceAleatorio]; // Obtiene el amigo sorteado

    mostrarResultado(amigoSorteado); // Muestra el resultado del sorteo
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado'); // Obtiene el elemento del resultado
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong> ${amigoSorteado}</strong></li>`; // Muestra el amigo sorteado en el resultado
}
