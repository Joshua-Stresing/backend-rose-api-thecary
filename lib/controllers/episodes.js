const { Router } = require('express');
const Episode = require('../models/Episode');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const episodeById = await Episode.getById(id);
    res.json(episodeById);
  })

  .get('/', async (req, res) => {
    const episodeList = await Episode.getAll();
    res.json(episodeList);
  });
