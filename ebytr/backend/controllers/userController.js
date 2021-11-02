const User = require('../models/usersModel');

const getAll = async (req, res) => {
  try {
    const user = await User.getAll();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  };
};

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  };
};
  

module.exports = {
    getAll,
    create,
}; 