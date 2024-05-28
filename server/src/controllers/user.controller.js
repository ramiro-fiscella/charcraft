// controllers/userController.js
const UserModel = require('../models/user.model');

const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await UserModel.createUser(username);
    res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createUser,
  getUserById,
};
