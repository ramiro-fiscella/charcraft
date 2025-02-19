const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { query } = require('../db');

// Crea un nuevo usuario (asegúrate de que no exista ya)
const createUser = async ({ email, username, password }) => {
  // Verificar si el usuario ya existe
  const existing = await query('SELECT * FROM users WHERE email = $1', [email]);
  if (existing.rows.length > 0) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await query(
    'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *',
    [email, username, hashedPassword]
  );
  return result.rows[0];
};

// Login: verifica credenciales y genera JWT
const loginUser = async ({ email, password }) => {
  const result = await query('SELECT * FROM users WHERE email = $1', [email]);
  if (result.rows.length === 0) {
    throw new Error('User not found');
  }

  const user = result.rows[0];
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { uid: user.uid, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
  return { token, user };
};

// Obtiene todos los usuarios, junto con los nombres de sus personajes (si existen)
const getUsers = async () => {
  const result = await query(
    `SELECT users.uid, users.username, users.email, characters.char_name 
     FROM users 
     LEFT JOIN characters ON users.uid = characters.user_id;`
  );

  const usersMap = {};

  result.rows.forEach((row) => {
    const { uid, username, email, char_name } = row;
    if (!usersMap[uid]) {
      usersMap[uid] = {
        uid,
        username,
        email,
        characters: [],
      };
    }
    if (char_name) {
      usersMap[uid].characters.push(char_name);
    }
  });

  return Object.values(usersMap);
};

// Obtiene un usuario por su uid (incluye sus personajes)
const getUserByUid = async (uid) => {
  const result = await query(
    `SELECT users.uid, users.username, users.email, characters.char_name
     FROM users 
     LEFT JOIN characters ON users.uid = characters.user_id 
     WHERE users.uid = $1`,
    [uid]
  );
  if (result.rows.length === 0) {
    return null;
  }
  const user = {
    uid: result.rows[0].uid,
    username: result.rows[0].username,
    email: result.rows[0].email,
    characters: [],
  };

  result.rows.forEach((row) => {
    if (row.char_name) {
      user.characters.push(row.char_name);
    }
  });

  return user;
};

module.exports = { createUser, loginUser, getUsers, getUserByUid };
