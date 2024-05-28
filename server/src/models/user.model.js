const { query } = require('../db');

const createUser = async (username) => {
  const queryString = 'INSERT INTO users (username) VALUES ($1) RETURNING *';
  const params = [username];
  const result = await query(queryString, params);
  return result.rows[0];
};

const getUserById = async (id) => {
  const queryString = 'SELECT * FROM users WHERE id = $1';
  const params = [id];
  const result = await query(queryString, params);
  return result.rows[0];
};

module.exports = {
  createUser,
  getUserById,
};
