const express = require('express');
const SchemeRouter = require('../schemes/scheme-router.js');

const db = require('../data/connection.js');

const server = express();

server.get('/', (req, res) => { res.status(418).json({ serverJS: "Test Endpoint Running"}) });
server.use('/api/schemes', SchemeRouter);

module.exports = server;