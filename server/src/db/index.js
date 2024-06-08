// require("dotenv").config();
const { Pool } = require('pg');

// const POSTGRES_DATABASEBASE = process.env.POSTGRES_DATABASEBASE;
// const POSTGRES_HOST = process.env.POSTGRES_HOST;
// const POSTGRES_PASSWORDORD = process.env.POSTGRES_PASSWORDORD;
// const PGPORT = process.env.PGPORT;
// const PPOSTGRES_USER = process.env.PPOSTGRES_USER;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const query = async (queryString, params) => {
  const client = await pool.connect();
  try {
    return await client.query(queryString, params);
  } finally {
    client.release();
  }
};

module.exports = { query };
