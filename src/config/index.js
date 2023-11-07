/* eslint-disable no-undef */

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(process.cwd(), '.env') });
module.exports = {
  port: process.env.PORT,
  mongoDb_database: process.env.MONGODB_DATABASE_URL,
};
