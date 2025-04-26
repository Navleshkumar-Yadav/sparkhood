require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-safety-incidents',
  nodeEnv: process.env.NODE_ENV || 'development',
  validSeverityLevels: ['Low', 'Medium', 'High']
};

module.exports = config;