// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let namesFriends = [];

function assignTextElement(element, namesArray) {
    const elementHTML = document.querySelector(element);
    elementHTML.innerHTML = namesArray.map(name => `<li>${name}</li>`).join(''); // Convierte cada nombre del arreglo en un elemento
}

function addFriend() {
    const input = document.getElementById("amigo");
    const name = input.value.trim(); // Quitar espacios al final

    if (name === "") {
        alert("Please write a name.");
        return;
    }

    // Verificar si el nombre ya existe en la lista (sin importar mayúsculas/minúsculas)
    for (let i = 0; i < namesFriends.length; i++) {
        if (namesFriends[i].toLowerCase() === name.toLowerCase()) {
            alert("This name is already on the list.");
            input.value = "";
            return;
        }
    }

    namesFriends.push(name); // Agrega el nombre al arreglo
    input.value = "";        // Limpia el input

    assignTextElement('#listaAmigos', namesFriends); // Muestra los nombres como lista
    //console.log(namesFriends);
}

function drawFriend() {
    if (namesFriends.length === 0) {
        //document.getElementById("resultado").innerHTML = `<li><strong>All friends have been drawn!</strong></li>`;
        alert("No more friends draw");
        return;
    }

    const randomIndex = Math.floor(Math.random() * namesFriends.length); // Se elige un indice al azar
    const chosenName = namesFriends.splice(randomIndex,1)[0]; // Elimina y obtiene el nombre
    //console.log(randomIndex);
    //console.log(chosenName);

    document.getElementById("resultado").innerHTML = `<li>The chosen friend is: <strong>${chosenName}</strong></li>`;

    // Actualiza la lista visual de amigos restantes
    assignTextElement('#listaAmigos', namesFriends);
}
