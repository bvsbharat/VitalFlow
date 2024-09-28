// Import the express module
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Set the port
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define the webhook endpoint
app.post('/webhook', (req, res) => {
  // Log the received data
  console.log('Webhook received:', req.body);

  // Send a response back to acknowledge receipt
  res.status(200).send('Webhook received');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
