const mongoose = require('mongoose');
const config = require('../config');

const IncidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  severity: {
    type: String,
    required: [true, 'Severity level is required'],
    enum: {
      values: config.validSeverityLevels,
      message: `Severity must be one of: ${config.validSeverityLevels.join(', ')}`
    }
  },
  reported_at: {
    type: Date,
    default: Date.now
  }
});


IncidentSchema.methods.toJSON = function() {
  const incident = this.toObject();
  incident.id = incident._id;
  delete incident._id;
  delete incident.__v;
  
  
  incident.reported_at = incident.reported_at.toISOString();
  
  return incident;
};

module.exports = mongoose.model('Incident', IncidentSchema);