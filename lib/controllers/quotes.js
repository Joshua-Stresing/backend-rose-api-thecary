const { Router } = require('express');
const Quote = require('../models/Quote');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const quoteById = await Quote.getById(id);
    res.json(quoteById);
  })

  .get('/', async (req, res) => {
    const quoteList = await Quote.getAll();
    res.json(quoteList);
  });
