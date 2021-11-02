const connection = require('../models/connection');

const getAll = async () => {
  const db = await connection()
  return db.collection('to-do').find().toArray();
};

const create = async (data) => {
  const db = await connection()
  return db.collection('to-do').insertOne(data);
};

module.exports = {
  getAll,
  create,
};