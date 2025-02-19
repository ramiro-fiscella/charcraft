const { Pool } = require('pg');
require('dotenv').config(); // Asegúrate de cargar dotenv aquí también

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env;

if (
  !POSTGRES_USER ||
  !POSTGRES_PASSWORD ||
  !POSTGRES_HOST ||
  !POSTGRES_DB ||
  !POSTGRES_PORT
) {
  throw new Error('Faltan variables de entorno para la conexión a PostgreSQL.');
}

const pool = new Pool({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD, // Asegúrate que sea una cadena (string)
  port: parseInt(POSTGRES_PORT, 10),
  ssl: false, // o configura ssl según tus necesidades
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
