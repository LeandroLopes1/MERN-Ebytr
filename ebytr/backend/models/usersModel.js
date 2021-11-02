const connection = require('../models/connection');

const getAll = async () => {
  const db = await connection()
  return db.collection('to-do').find().toArray();
};

module.exports = {
    getAll,
};