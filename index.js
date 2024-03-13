require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT||5000;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));