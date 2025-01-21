const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

// Import your Task model
const Task = require('./api/models/todoListModel');

// Connect to MongoDB (no need for useNewUrlParser and useUnifiedTopology)
mongoose.Promise = global.Promise; // Use global Promise for Mongoose
mongoose.connect('mongodb://localhost:27017/Tododb')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import and register routes
const routes = require('./api/routes/todoListRoutes');
routes(app); // Register the routes

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Todo List RESTful API server started on port: ${port}`);
});
