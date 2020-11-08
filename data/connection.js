const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);

// const knexfile = require('../knexfile.js');

// // we know that heroku is going to use the production environment but we don't have it defined yet so we don't hard code it

// const environment = process.env.NODE_ENV || 'development'; 