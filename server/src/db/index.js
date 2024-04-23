// require("dotenv").config();
const { Pool } = require("pg");

// const PGDATABASE = process.env.PGDATABASE;
// const PGHOST = process.env.PGHOST;
// const PGPASSWORD = process.env.PGPASSWORD;
// const PGPORT = process.env.PGPORT;
// const PGUSER = process.env.PGUSER;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "charcraft_db",
  password: "postgres",
  port: 5433,
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
