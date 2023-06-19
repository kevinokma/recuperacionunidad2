
function saludar() {
  var mensaje = "Hola soy: Kevin Martinez";
  alert(mensaje);
}

function imprimirMensaje() {
  var inputTexto = document.getElementById("textoInput");
  var mensaje = inputTexto.value;
  var h1Mensaje = document.getElementById("mensaje");
  h1Mensaje.textContent = mensaje;
}
