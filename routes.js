const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')
const aboutController = require('./src/controllers/aboutController')

// Home routes
route.get('/', homeController.homeController);
route.post('/', homeController.trataPost);

// Contact routes
route.get('/contato', contactController.contactController);

// About routes
route.get('/sobre', aboutController.aboutController);



module.exports = route;