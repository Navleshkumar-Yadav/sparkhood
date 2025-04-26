# AI Safety Incident Log API

A RESTful API service for logging and managing AI safety incidents.

## Tech Stack

- **Language/Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Other Tools**: dotenv, cors, morgan

## Setup & Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local instance or Atlas connection)

### Installation Steps

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd ai-safety-incident-log
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Environment Configuration
   ```bash
   # Copy example environment file
   cp .env.example .env
   
   # Edit the .env file with your MongoDB connection string
   # Default is: mongodb://localhost:27017/ai-safety-incidents
   ```

4. Database Setup
   ```bash
   # Make sure MongoDB is running on your system
   
   # Seed the database with sample incidents (optional)
   npm run seed
   ```

5. Start the server
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### 1. Get All Incidents
- **Method**: GET
- **Path**: `/api/incidents`
- **Response**: Array of incident objects
- **Example**:
  ```bash
  curl -X GET http://localhost:3000/api/incidents
  ```

### 2. Get Incident by ID
- **Method**: GET
- **Path**: `/api/incidents/:id`
- **Response**: Single incident object or 404
- **Example**:
  ```bash
  curl -X GET http://localhost:3000/api/incidents/60d21b4667d0d8992e610c85
  ```

### 3. Create New Incident
- **Method**: POST
- **Path**: `/api/incidents`
- **Body**: JSON object with title, description, and severity
- **Response**: Created incident object with id and reported_at
- **Example**:
  ```bash
  curl -X POST http://localhost:3000/api/incidents \
    -H "Content-Type: application/json" \
    -d '{"title":"Model Hallucination","description":"AI model generated false information about historical events.","severity":"Medium"}'
  ```

### 4. Delete Incident
- **Method**: DELETE
- **Path**: `/api/incidents/:id`
- **Response**: 204 No Content on success, 404 if not found
- **Example**:
  ```bash
  curl -X DELETE http://localhost:3000/api/incidents/60d21b4667d0d8992e610c85
  ```

## Data Structure

Each incident has the following structure:

```json
{
  "id": "60d21b4667d0d8992e610c85",
  "title": "Unauthorized API Access",
  "description": "An AI system accessed restricted data through an unsecured API endpoint.",
  "severity": "High",
  "reported_at": "2025-01-15T10:30:00.000Z"
}
```

- **id**: MongoDB ObjectId (string)
- **title**: Brief summary of the incident (string)
- **description**: Detailed explanation (string)
- **severity**: Must be one of: "Low", "Medium", "High" (string)
- **reported_at**: ISO 8601 formatted timestamp (string)

## Design Decisions

1. **Modular Architecture**: The code is organized into separate modules for routes, controllers, models, and utilities to maintain clear separation of concerns.

2. **Error Handling**: Centralized error handling with custom middleware to ensure consistent error responses.

3. **Validation**: Input validation for required fields and severity levels to maintain data integrity.

4. **Async/Await**: Used with a custom wrapper to handle promise rejections cleanly.

5. **MongoDB & Mongoose**: Chosen for ease of use and flexibility in document structure.

## License

[ISC License](LICENSE)