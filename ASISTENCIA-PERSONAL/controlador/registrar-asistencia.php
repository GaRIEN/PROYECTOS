<?php

date_default_timezone_set('America/Lima'); // Establecer la zona horaria
// Incluir la conexión a la base de datos
include dirname(__DIR__) . "/conexion/conexion.php";

// Obtener la conexión
$conexion = obtenerConexion();

// Verificar que se ha enviado el usuario
if (!empty($_POST["txtusuario"])) {
    // Capturar el usuario enviado
    $usuario = $_POST["txtusuario"];

    // Consultar si el usuario existe
    $consulta = $conexion->query("SELECT id_empleado FROM empleado WHERE codigo_empleado = '$usuario'");

    if ($consulta) {
        if ($consulta->num_rows > 0) {
            $empleado = $consulta->fetch_object();
            $id_empleado = $empleado->id_empleado; // Capturamos el id_empleado

            // Verificar si ya ha registrado asistencia hoy
            $hoy = date("Y-m-d"); // Obtener solo la fecha actual (sin la hora)
            $consulta_asistencia = $conexion->prepare("SELECT id_asistencia FROM asistencia WHERE id_empleado = ? AND DATE(entrada) = ?");
            $consulta_asistencia->bind_param("is", $id_empleado, $hoy);
            $consulta_asistencia->execute();
            $resultado_asistencia = $consulta_asistencia->get_result();

            if ($resultado_asistencia->num_rows > 0) {
                // Ya existe un registro de asistencia hoy
                echo 'doble'; // Mensaje de error si ya registró asistencia hoy
            } else {
                // No ha registrado asistencia hoy, proceder a registrar
                $entrada = date("Y-m-d H:i:s"); // Captura la fecha y hora actual
                $registrado = 'Y';

                $insertar = $conexion->prepare("INSERT INTO asistencia (id_empleado, entrada, registrado) VALUES (?, ?, ?)");
                $insertar->bind_param("iss", $id_empleado, $entrada, $registrado);

                if ($insertar->execute()) {
                    echo 'success'; // Registro exitoso
                } else {
                    echo 'error_insertar'; // Error al insertar
                }

                $insertar->close();
            }

            // Cerrar la consulta preparada
            $consulta_asistencia->close();
        } else {
            echo 'error_usuario_no_encontrado'; // Usuario no encontrado
        }
    } else {
        echo 'error_consulta_usuario'; // Error al ejecutar la consulta de usuario
    }
} else {
    echo 'error_no_usuario'; // No se envió el usuario
}

// Cerrar la conexión
$conexion->close();
?>
