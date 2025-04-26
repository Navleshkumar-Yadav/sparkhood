const Incident = require('../models/Incident');
const { validSeverityLevels } = require('../config');
const asyncHandler = require('../utils/asyncHandler');


const getIncidents = asyncHandler(async (req, res) => {
  const incidents = await Incident.find();
  res.status(200).json(incidents);
});


const getIncidentById = asyncHandler(async (req, res) => {
  const incident = await Incident.findById(req.params.id);
  
  if (!incident) {
    res.status(404);
    throw new Error('Incident not found');
  }
  
  res.status(200).json(incident);
});


const createIncident = asyncHandler(async (req, res) => {
  const { title, description, severity } = req.body;
  

  if (!title || !description || !severity) {
    res.status(400);
    throw new Error('Please provide title, description and severity');
  }
  
  if (!validSeverityLevels.includes(severity)) {
    res.status(400);
    throw new Error(`Severity must be one of: ${validSeverityLevels.join(', ')}`);
  }
  
  
  const incident = await Incident.create({
    title,
    description,
    severity
  });
  
  res.status(201).json(incident);
});


const deleteIncident = asyncHandler(async (req, res) => {
  const incident = await Incident.findById(req.params.id);
  
  if (!incident) {
    res.status(404);
    throw new Error('Incident not found');
  }
  
  await incident.deleteOne();
  
  res.status(204).send();
});

module.exports = {
  getIncidents,
  getIncidentById,
  createIncident,
  deleteIncident
};