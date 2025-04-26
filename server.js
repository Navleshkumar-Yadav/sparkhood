const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./src/config');
const connectDB = require('./src/db/connection');
const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');


const app = express();


connectDB();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api', routes);


app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the AI Safety Incident Log API',
    documentation: '/api-docs',
    endpoints: {
      getAllIncidents: 'GET /api/incidents',
      getIncidentById: 'GET /api/incidents/:id',
      createIncident: 'POST /api/incidents',
      deleteIncident: 'DELETE /api/incidents/:id'
    }
  });
});


app.use(errorHandler);


const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  
  process.exit(1);
});