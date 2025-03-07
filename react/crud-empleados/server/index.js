const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json()); // Habilitar JSON en las solicitudes

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud_empleados"
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error("❌ Error al conectar a la base de datos:", err);
        return;
    }
    console.log("✅ Conectado a la base de datos MySQL");
});

// Ruta para insertar un empleado
app.post("/create", (req, res) => {
    const { nombre, apellidos, edad, pais, cargo, anios_experiencia } = req.body;

    // Consulta SQL para insertar datos
    const sql = "INSERT INTO empleados (nombre, apellidos, edad, pais_id, cargo_id, anios_experiencia) VALUES (?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [nombre, apellidos, edad, pais, cargo, anios_experiencia], (err, result) => {
        if (err) {
            console.error("❌ Error al insertar datos:", err);
            return res.status(500).json({ error: "Error al insertar empleado" });
        }
        res.status(201).json({ message: "Empleado creado con éxito", empleadoId: result.insertId });
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:3000");
});

