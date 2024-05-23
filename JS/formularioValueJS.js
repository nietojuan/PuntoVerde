function validarFormulario() {
  var nombre = document.getElementById("firtsname").value;
  var apellido = document.getElementById("lastname").value;
  var direccion = document.getElementById("adress").value;
  var provincia = document.getElementById("location").value;
  var localidad = document.getElementById("localidad").value;
  var correo = document.getElementById("email").value;

  if (
    nombre.trim() == "" ||
    apellido.trim() == "" ||
    direccion.trim() == "" ||
    provincia == "" ||
    localidad.trim() == "" ||
    correo.trim() == ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }
  return true;
}
