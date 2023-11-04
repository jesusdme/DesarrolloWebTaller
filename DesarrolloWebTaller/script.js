console.log("from script file");

// Función para desplazarse suavemente al hacer clic en un enlace
function scrollToAnchor(anchorID) {
  var target = document.querySelector(anchorID);
  var menuHeight = document.querySelector('.menu').offsetHeight; // Cambia '.menu' al selector correcto de tu menú

  if (target) {
    window.scrollTo({
      top: target.offsetTop - menuHeight,
      behavior: 'smooth' // Esta propiedad activa el desplazamiento suave
    });
  }
}
var cont = 0;
let nombres = [];
let mensajes = [];


function mostrarDatos() {
  nombres[cont] = document.getElementById("nombre").value;
  mensajes[cont] = document.getElementById("idMensaje").value;

  var mensajeError = document.getElementById("errorForm");
  var mensajeError2 = document.getElementById("errorForm2");

  mensajeError.textContent = "";
  mensajeError2.textContent = "";

  if (nombres[cont] != "" && mensajes[cont] != "" && mensajes[cont].length < 301) {
    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = datosMostrados.innerHTML + "<p><strong style='color: blue;'>Mensaje numero: " + (cont + 1) + "</strong>" + "<p><strong>Nombre:</strong> " + nombres[cont] + "</p>" +
      "<p><strong>Mensaje:</strong> " + mensajes[cont] + "\n" + "</p>";

    cont++;
  }
  if (nombres[cont] == "") {
    var mensajeError = document.getElementById("errorForm");
    mensajeError.textContent = "Ningún dato puede estar vacío";
  }
  if (mensajes[cont] == "") {
    var mensajeError = document.getElementById("errorForm2");
    mensajeError.textContent = "Ningún dato puede estar vacío";
  }
  if (mensajes[cont].length > 300) {
    var mensajeError = document.getElementById("errorForm2");
    mensajeError.textContent = "El texto del mensaje no debe superar los 300 caracteres";
  }
}

