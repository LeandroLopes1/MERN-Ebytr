const { ObjectId } = require('mongodb');
const connection = require('../models/connection');

const order = { text: 1 };

const getAll = async () => {
  const db = await connection()
  return db.collection('to-do').find().sort(order).toArray();
};

const create = async (data) => {
  const db = await connection()
  return db.collection('to-do').insertOne(data);
};

const update = async (data) => {
  const db = await connection()
  return db.collection('to-do').updateOne({ _id: ObjectId(data._id) }, { $set: data });
};

const deleteOne = async (data) => {
  const db = await connection()
  return db.collection('to-do').deleteOne({ _id: ObjectId(data._id) });
};

module.exports = {
  getAll,
  create,
  update,
  deleteOne
};