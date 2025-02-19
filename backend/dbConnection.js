const sql = require('mssql');
require('dotenv').config();

// Configuración de la base de datos
const config = {
  user: process.env.USER,                   // Usuario de SQL Server
  password:  process.env.PASSWORD,       // Contraseña del usuario
  server: process.env.HOST,        // Dirección del servidor o IP
  database: process.env.DATABASE,     // Nombre de la base de datos
  port:1433,              // Puerto (opcional, por defecto es 1433)
  options: {
    encrypt: false,             // Cambiar a true si estás en Azure
    trustServerCertificate: true // Usar solo en entornos de desarrollo
  },
  pool: {
    max: 10,                  
    min: 0,                     
    idleTimeoutMillis: 30000    // Tiempo de espera en milisegundos antes de cerrar una conexión inactiva
  }
};

// Crear una conexión de pool
const connectDB = async () => {
  try {
    const pool = await sql.connect(config);
    console.log('Conexión a SQL Server exitosa');
    return pool;
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    throw error;
  }
};

module.exports = { connectDB, sql};


