const express = require('express');
const incidentRoutes = require('./incidentRoutes');

const router = express.Router();

router.use('/incidents', incidentRoutes);

module.exports = router;