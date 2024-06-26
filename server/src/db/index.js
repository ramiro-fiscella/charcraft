require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.PG_URL,
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
