const { Router } = require('express');
const Char = require('../models/Character');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const charById = await Char.getById(id);
    res.json(charById);
  })

  .get('/', async (req, res) => {
    const charList = await Char.getAll();
    res.json(charList);
  });
