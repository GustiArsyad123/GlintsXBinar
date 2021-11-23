const express = require('express'); // Import express
const app = express(); // Create the app from express
const cars = require('./routes/car'); // Import the cars routes
const port = process.env.PORT || 5000; // Define port

app.use(express.json()); // enable read req.body (JSON)
// Enable req.body (URL-Encoded)
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* If client go to http://localhost:5000/cars or http://localhost:5000 */
app.use('/cars', cars);


/* Running this app */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
