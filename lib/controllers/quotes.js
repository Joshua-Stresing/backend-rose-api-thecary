const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router().post('/', async (req, res) => {
  const quoteList = await Quote.insert(req.body);
  res.json(quoteList);
});
