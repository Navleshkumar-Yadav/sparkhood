const mongoose = require('mongoose');
const Incident = require('../models/Incident');
const connectDB = require('../db/connection');
const config = require('../config');

const sampleIncidents = [
  {
    title: 'Unauthorized API Access',
    description: 'An AI system accessed restricted data through an unsecured API endpoint.',
    severity: 'High',
    reported_at: new Date('2025-01-15T10:30:00Z')
  },
  {
    title: 'Biased Output Generation',
    description: 'The language model produced consistently biased responses when asked about certain demographic groups.',
    severity: 'Medium',
    reported_at: new Date('2025-02-21T14:45:00Z')
  },
  {
    title: 'Excessive Resource Consumption',
    description: 'AI system entered a loop that consumed excessive computational resources.',
    severity: 'Low',
    reported_at: new Date('2025-03-10T09:15:00Z')
  }
];

const seedData = async () => {
  try {
    
    await connectDB();
    
   
    await Incident.deleteMany({});
    console.log('Previous incidents deleted');
    
    
    const createdIncidents = await Incident.insertMany(sampleIncidents);
    console.log(`${createdIncidents.length} sample incidents inserted`);
    
   
    await mongoose.disconnect();
    console.log('Database seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};


seedData();