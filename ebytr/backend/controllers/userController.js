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

module.exports = {
    getAll, 
}; 