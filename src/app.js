const express = require('express');
const cors = require('cors');
const routes = require('./app/routes');
// const router = require('./app/routes');

const app = express();

// cors
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1', routes);

// heath route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'Success' });
});
module.exports = app;
