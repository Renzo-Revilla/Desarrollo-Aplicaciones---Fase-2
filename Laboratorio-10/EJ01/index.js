const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',          // deja vacío si no tienes contraseña
  database: 'aerolinea'
});

function calcularPrecio(fechaNacimiento, precioBase) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  let tipo = '';
  let precioFinal = 0;

  if (edad < 2) {
    tipo = 'Infante';
    precioFinal = 0;
  } else if (edad >= 2 && edad <= 17) {
    tipo = 'Menor';
    precioFinal = precioBase * 0.75;
  } else {
    tipo = 'Adulto';
    precioFinal = precioBase;
  }

  return { tipo, precioFinal };
}

app.post('/api/pasajes', async (req, res) => {
  try {
    const { nombre, fecha_nacimiento, precio_base } = req.body;
    const { tipo, precioFinal } = calcularPrecio(fecha_nacimiento, precio_base);

    const [result] = await pool.query(
      'INSERT INTO pasajes (nombre, fecha_nacimiento, precio_base, precio_final, tipo_pasajero) VALUES (?, ?, ?, ?, ?)',
      [nombre, fecha_nacimiento, precio_base, precioFinal, tipo]
    );

    res.json({
      message: 'Pasaje vendido correctamente',
      tipo_pasajero: tipo,
      precio_final: precioFinal
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.get('/api/pasajes', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pasajes ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al consultar' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});