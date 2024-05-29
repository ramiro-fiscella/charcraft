const UserModel = require('../models/user.model');

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    res.status(201).json(users);
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

const createUser = async (req, res) => {
  const { auth0_id, username } = req.body;
  try {
    const user = await UserModel.createUser({ auth0_id, username });
    res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
