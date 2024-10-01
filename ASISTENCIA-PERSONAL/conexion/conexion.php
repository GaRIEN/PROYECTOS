<?php
// conexion.php

function obtenerConexion() {
    $conexion = new mysqli("localhost", "root", "root", "sisasistencia");
    $conexion->set_charset("utf8");
    
    return $conexion;
}
?>
