const { query } = require('../db');

const getUsers = async () => {
  const result = await query(
    `SELECT users.uid, users.username, characters.char_name 
     FROM users 
     LEFT JOIN characters ON users.uid = characters.user_id;`
  );

  const usersMap = {};

  result.rows.forEach((row) => {
    const { uid, username, char_name } = row;
    if (!usersMap[uid]) {
      usersMap[uid] = {
        uid,
        username,
        characters: [],
      };
    }
    if (char_name) {
      usersMap[uid].characters.push(char_name);
    }
  });

  return Object.values(usersMap);
};

const getUserById = async (id) => {
  const result = await query(
    `SELECT users.uid, users.username, auth0_id, characters.char_name
     FROM users 
     LEFT JOIN characters ON users.uid = characters.user_id 
     WHERE users.uid = $1;`,
    [id]
  );

  if (result.rows.length === 0) {
    return null;
  }

  const user = {
    uid: result.rows[0].uid,
    username: result.rows[0].username,
    auth0_id: result.rows[0].auth0_id,
    characters: [],
  };

  result.rows.forEach((row) => {
    if (row.char_name) {
      user.characters.push(row.char_name);
    }
  });

  return user;
};

const createUser = async ({ auth0_id, username }) => {
  const result = await query('SELECT * FROM users WHERE auth0_id = $1;', [
    auth0_id,
  ]);

  if (result.rows.length > 0) {
    return result.rows[0];
  } else {
    const insertResult = await query(
      'INSERT INTO users (auth0_id, username) VALUES ($1, $2) RETURNING *;',
      [auth0_id, username]
    );
    return insertResult.rows[0];
  }
};

module.exports = { getUsers, getUserById, createUser };
