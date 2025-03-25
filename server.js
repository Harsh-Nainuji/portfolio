// Import required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Define the port from the environment or default to 3000
const PORT = process.env.PORT || 3000;

/*
 * Set up middleware to serve static files. *  - public: contains your HTML files (e.g., index.html)
 *  - views: contains additional assets like CSS and JS files
 *  - images: contains image files
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'images')));

/*
 * When a request is made to the root URL ('/'), 
 * serve the index.html file from the public folder.
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*
 * Log a message to the console once the server is running.
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
