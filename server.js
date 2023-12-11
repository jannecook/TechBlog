// Dependencies
const express = require('express');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

// Set up the Express
const app = express();
const PORT = process.env.PORT || 3001;