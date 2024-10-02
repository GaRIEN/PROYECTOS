<?php

date_default_timezone_set('America/Lima'); // Establecer la zona horaria
include dirname(__DIR__) . "/conexion/conexion.php"; // Incluir la conexión a la base de datos

$conexion = obtenerConexion();

if (!empty($_POST["txtusuario"])) {
    $usuario = $_POST["txtusuario"];
    
    // Consultar si el usuario existe
    $consulta = $conexion->query("SELECT id_empleado FROM empleado WHERE codigo_empleado = '$usuario'");

    if ($consulta) {
        if ($consulta->num_rows > 0) {
            $empleado = $consulta->fetch_object();
            $id_empleado = $empleado->id_empleado;
            $hoy = date("Y-m-d"); // Obtener solo la fecha actual (sin la hora)

            // Verificar si ya ha registrado entrada hoy y si aún no ha registrado salida
            $consulta_asistencia = $conexion->prepare("SELECT id_asistencia, entrada, salida FROM asistencia WHERE id_empleado = ? AND DATE(entrada) = ? AND salida IS NULL");
            $consulta_asistencia->bind_param("is", $id_empleado, $hoy);
            $consulta_asistencia->execute();
            $resultado_asistencia = $consulta_asistencia->get_result();

            if ($resultado_asistencia->num_rows > 0) {
                // Existe un registro de entrada sin salida para hoy
                $asistencia = $resultado_asistencia->fetch_object();
                $salida = date("Y-m-d H:i:s"); // Capturar la fecha y hora actual para la salida
                
                // Actualizar el registro de asistencia con la hora de salida
                $actualizar = $conexion->prepare("UPDATE asistencia SET salida = ? WHERE id_asistencia = ?");
                $actualizar->bind_param("si", $salida, $asistencia->id_asistencia);

                if ($actualizar->execute()) {
                    echo 'success'; // Salida registrada exitosamente
                } else {
                    echo 'error'; // Error al actualizar la salida
                }

                $actualizar->close();
            } else {
                // No existe un registro de entrada para hoy o ya ha registrado salida
                echo 'nohay';
            }

            $consulta_asistencia->close();
        } else {
            echo 'error_usuario_no_encontrado'; // Usuario no encontrado
        }
    } else {
        echo 'usarionoexiste'; // Error al ejecutar la consulta de usuario
    }
} else {
    echo 'noenviousuario'; // No se envió el usuario
}

$conexion->close();
?>
