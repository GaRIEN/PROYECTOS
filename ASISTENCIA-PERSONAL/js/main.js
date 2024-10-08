//cuando cargue la pagina por primera vez, este se ejeuctara
$(document).ready(function () {
  // para poner la fecha y hora en tiempo real
  // poner la hora en tiempo real
  // todo lo que esta dentro del setInterval se va a ejecutar cada segundo
  setInterval(() => {
    // variable fecha
    let fecha = new Date();
    // obtener la fecha y hora en javascript
    let fechahora = fecha.toLocaleString();
    // llamar al h2 que tiene el id = fecha
    // y enviar a su contenido lo que esta en la variable fechahora
    $("#fecha").text(fechahora);
  }, 1000);
});

$("#btnentrada").on("click", function (evento) {
  evento.preventDefault();

  let usuario = $("#txtusuario").val();
  console.log(usuario);

  if (usuario.trim() === "") {
    alert("Por favor, ingrese su código de usuario.");
    return;
  }

  // Enviar el código de usuario al servidor para verificar

  $.ajax({
    url: "controlador/registrar-asistencia.php",
    type: "POST", //METODO POST que es enviar a bd
    data: { txtusuario: usuario }, // Envío del valor de usuario
    success: function (response) {
      console.log(response);
      // Mostrar notificación según la respuesta
      if (response.trim() === "success") {
        // Usamos trim() para eliminar espacios en blanco
        Swal.fire({
          title: "CORRECTO",
          text: "se registro ecitosamente el ingreso",
          icon: "success",
        });
      } else if (response.trim() === "doble") {
        Swal.fire({
          title: "ERROR",
          text: "Ya registro asistencia, solo se puede registrar una vez al dia",
          icon: "error",
        });
      } else if (response.trim() === "error_insertar") {
        Swal.fire({
          title: "ERROR",
          text: "El usuario no existe",
          icon: "error",
        });
      }
      $("#txtusuario").val("");
    },
  });
});

$("#btnsalida").on("click", function (evento) {
    evento.preventDefault();
    
    let usuario = $("#txtusuario").val();
    console.log(usuario);
  
  
    // Enviar el código de usuario al servidor para registrar la salida
    $.ajax({
        url: "controlador/registro-salida.php",  // Un controlador PHP separado para manejar la salida
        type: "POST",
        data: { txtusuario: usuario }, 
        success: function (response) {
            console.log(response);

            if (response.trim() === "success") {
                Swal.fire({
                    title: "CORRECTO",
                    text: "Se registró exitosamente la salida",
                    icon: "success",
                });
            } else if (response.trim() === "nohay") {
                Swal.fire({
                    title: "ERROR",
                    text: "No tienes una entrada registrada o ya has registrado la salida.",
                    icon: "error",
                });
            } else if (response.trim() === "error") {
                Swal.fire({
                    title: "ERROR",
                    text: "Error al registrar la salida.",
                    icon: "error",
                });
            } else if(response.trim()=== "usarionoexiste"){
                Swal.fire({
                    title: "ERROR",
                    text: "El usuario no existe",
                    icon: "error",
                });
            }
            else if(response.trim()=== "noenviousuario"){
                Swal.fire({
                    title: "ERROR",
                    text: "Por favor ingrese el codigo del usuario",
                    icon: "error",
                });
            }
        },
    });
});
