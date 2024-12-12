// Obtener el botón y el menú desplegable
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Agregar un evento de clic para mostrar/ocultar el menú
dropdownToggle.addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
    dropdownMenu.classList.toggle('show');
});

// Cerrar el menú si el usuario hace clic fuera de él
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle') && !event.target.matches('.dropdown-menu') && !event.target.matches('.dropdown-menu li')) {
        dropdownMenu.classList.remove('show');
    }
});
// Función para preguntar sobre el tipo de comida
function askQuestion(color) {
    let pregunta = "";

    // Preguntar sobre el tipo de comida según el color del semáforo
    switch(color) {
        case 'verde':
            pregunta = "¿Qué tipo de comida saludable comes? (Ejemplo: frutas, verduras, pescado)";
            break;
        case 'amarillo':
            pregunta = "¿Comes comida moderada? (Ejemplo: pan, pasta, carnes magras)";
            break;
        case 'rojo':
            pregunta = "¿Comes comida no saludable? (Ejemplo: comida rápida, fritos, refrescos)";
            break;
    }

    // Mostrar la pregunta
    let respuesta = prompt(pregunta);

    // Evaluar la respuesta
    if (respuesta) {
        evaluateHealth(color, respuesta);
    }
}

// Función para evaluar la respuesta
function evaluateHealth(color, respuesta) {
    let mensaje = "";

    // Evaluar la respuesta según el color del semáforo
    switch(color) {
        case 'verde':
            if (respuesta.toLowerCase().includes("frutas") || respuesta.toLowerCase().includes("verduras") || respuesta.toLowerCase().includes("pescado")) {
                mensaje = "¡Excelente elección! Esa es una comida saludable.";
            } else {
                mensaje = "Intenta elegir más frutas, verduras o proteínas saludables.";
            }
            break;
        case 'amarillo':
            if (respuesta.toLowerCase().includes("pan") || respuesta.toLowerCase().includes("pasta") || respuesta.toLowerCase().includes("carnes magras")) {
                mensaje = "Comida moderada, ¡buena opción!";
            } else {
                mensaje = "Recuerda moderar las cantidades y elige opciones más equilibradas.";
            }
            break;
        case 'rojo':
            if (respuesta.toLowerCase().includes("comida rápida") || respuesta.toLowerCase().includes("fritos") || respuesta.toLowerCase().includes("refrescos")) {
                mensaje = "¡Cuidado! Esa comida no es muy saludable.";
            } else {
                mensaje = "Intenta evitar los alimentos poco saludables, elige opciones más nutritivas.";
            }
            break;
    }

    // Mostrar el mensaje en una alerta
    alert(mensaje);
}
