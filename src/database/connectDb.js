const mongoose = require('mongoose');
const { mongoDb_database } = require('../config');

const connectDb = async () => {
  try {
    await mongoose.connect(mongoDb_database);
    console.log('Database connected Successfully ...! [MongoDB]');
  } catch (error) {
    console.log('[MongoDB]: Database Connected failed', error);
  }
};
module.exports = connectDb;
