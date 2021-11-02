const Task = require('../models/usersModel');

const getAll = async (req, res) => {
  try {
    const task = await Task.getAll();
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  };
};

const create = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  };
};

const update = async (req, res) => {
  try {
    const task = await Task.update(req.body);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  };
};

const deleteUser = async (req, res) => {
  try {
    const task = await Task.deleteOne(req.body);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  };
};

module.exports = {
    getAll,
    create,
    update,
    deleteUser,
}; 