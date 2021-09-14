const express = require("express");
const cors = require("cors");
require('dotenv').config();

const port = process.env.port || 8080;

const movieRoutes = require('./Routes/movies')
const weatherRoutes = require('./Routes/weather')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/movie', movieRoutes);
app.use('/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server is up, listening on port ${port}`);
});