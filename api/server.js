// connect to recipes-router.js
// connect to ingredients-router.js
const express = require('express');
const helmet = require('helmet');

const server = express();

const RecipesRouter = require('./recipes/recipes-router.js');
const IngredientsRouter = require('./ingredients/ingredients-router.js');

server.use(express.json());
//server.use('/api/recipes'. RecipesRouter);
//server.use('/api/ingredients', IngredientsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>DB4 Recipes schema assignment</h2>`);
  });
  

module.exports = server;