const { query } = require('../db');

const getUsers = async () => {
  const result = await query(
    `SELECT users.uid, users.username, characters.char_name 
     FROM users 
     LEFT JOIN characters ON users.uid = characters.user_id;`
  );
  // Crear un objeto para agrupar los personajes por usuario
  const usersMap = {};

  result.rows.forEach((row) => {
    const { uid, username, char_name } = row;

    // Si el usuario no existe en el mapa, crear una nueva entrada
    if (!usersMap[uid]) {
      usersMap[uid] = {
        uid,
        username,
        characters: [],
      };
    }

    // Si hay un char_name, agregarlo a la lista de personajes
    if (char_name) {
      usersMap[uid].characters.push(char_name);
    }
  });

  // Convertir el mapa de usuarios en un array
  const usersArray = Object.values(usersMap);

  return usersArray;
};

const getUserById = async (id) => {
  const result = await query(
    `SELECT users.uid, users.username, characters.char_name 
     FROM users 
     LEFT JOIN characters ON users.uid = characters.user_id 
     WHERE users.uid = $1;`,
    [id]
  );

  // Verificar si se encontró un usuario
  if (result.rows.length === 0) {
    return null; // o puedes lanzar un error dependiendo de tu lógica
  }

  // Crear un objeto para el usuario
  const user = {
    uid: result.rows[0].uid,
    username: result.rows[0].username,
    characters: [],
  };

  // Agregar los nombres de los personajes a la lista del usuario
  result.rows.forEach((row) => {
    if (row.char_name) {
      user.characters.push(row.char_name);
    }
  });

  return user;
};

const createUser = async ({ username }) => {
  const result = await query(
    'INSERT INTO users (username) VALUES ($1) RETURNING *;',
    [username]
  );
  return result.rows[0];
};

module.exports = { getUsers, createUser, getUserById };
