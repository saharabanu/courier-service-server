const express = require('express');
const branchRoutes = require('../modules/branch/branch.route');

const router = express.Router();

router.use('/branch', branchRoutes);

const routes = router;

module.exports = routes;
