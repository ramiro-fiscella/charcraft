const UserModel = require('../models/user.model');

// Registro de usuario
const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const newUser = await UserModel.createUser({ email, username, password });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ message: err.message });
  }
};

// Inicio de sesión
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await UserModel.loginUser({ email, password });
    res.json({ token, user });
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: err.message });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Obtener usuario por uid
const getUser = async (req, res) => {
  const { uid } = req.params; // Aquí se espera que el parámetro se llame "uid"
  try {
    const user = await UserModel.getUserByUid(uid);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser, getAllUsers, getUser };
