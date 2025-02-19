require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .then(() => console.log('✅ Conectado a PostgreSQL'))
  .catch((err) => console.error('❌ Error:', err.message))
  .finally(() => client.end());
