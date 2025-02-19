const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { Client } = require('pg');

// Importa las rutas por separado
const userRoutes = require('./src/routes/user.routes');
const characterRoutes = require('./src/routes/character.routes');

require('dotenv').config();

const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  PORT,
} = process.env;

const connectionString = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://hojascleric.vercel.app',
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(morgan('dev'));

// Monta las rutas de forma separada
app.use('/users', userRoutes);
app.use('/characters', characterRoutes);

// Conexión a PostgreSQL (puedes centralizarla en db.js)
const client = new Client({
  connectionString: connectionString,
  ssl: false,
});

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('Database connection error:', err.stack));

// Inicia el servidor
app.listen(PORT || 5000, () =>
  console.log(`Server started on port ${PORT || 5000}`)
);
