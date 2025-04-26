const express = require('express');
const {
  getIncidents,
  getIncidentById,
  createIncident,
  deleteIncident
} = require('../controllers/incidentController');

const router = express.Router();



router.route('/getIncidents')
  .get(getIncidents);

router.route('/createIncidents')
  .post(createIncident);

router.route('/:id')
  .get(getIncidentById)
  .delete(deleteIncident);


module.exports = router;