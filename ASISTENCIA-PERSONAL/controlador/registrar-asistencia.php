<?php

// Incluir la conexión a la base de datos
include dirname(__DIR__) . "/conexion/conexion.php";

// Obtener la conexión
$conexion = obtenerConexion();

// Verificar que se ha enviado el usuario
if (!empty($_POST["txtusuario"])) {
    // Capturar el usuario enviado
    $usuario = $_POST["txtusuario"];

    // Consultar a la BD si el usuario existe
    $consulta = $conexion->query("SELECT id_empleado FROM empleado WHERE codigo_empleado = '$usuario'");

    // Verificar si la consulta fue exitosa
    if ($consulta) {
        // Verificar si el usuario existe
        if ($consulta->num_rows > 0) {
            $empleado = $consulta->fetch_object();
            $id_empleado = $empleado->id_empleado; // Capturamos el id_empleado

            // Insertar datos en la tabla asistencia
            $entrada = date("Y-m-d H:i:s"); // Captura la fecha y hora actual
            $registrado = 'Y';

            $insertar = $conexion->prepare("INSERT INTO asistencia (id_empleado, entrada, registrado) VALUES (?, ?, ?)");
            $insertar->bind_param("iss", $id_empleado, $entrada, $registrado);

            if ($insertar->execute()) {
                echo 'success'; // Registro exitoso
            } else {
                echo 'error'; // Error al insertar
            }

            // Cerrar la consulta preparada
            $insertar->close();
        } else {
            echo 'error'; // Usuario no encontrado
        }
    } else {
        echo 'error'; // Error al ejecutar la consulta
    }
} else {
    echo 'error'; // No se envió el usuario
}

// Cerrar la conexión
$conexion->close();
