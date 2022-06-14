const { Router } = require('express');
const Quote = require('../models/Quote');

module.exports = Router().get('/', async (req, res) => {
  const quoteList = await Quote.getAll();
  res.json(quoteList);
});
