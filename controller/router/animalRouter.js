const { Router } = require('express');
const { getAllLogic: getAllRouter } = require('../business_logic/animalLogic');

const router = Router();

// Get All
router.get('/', getAllRouter);

module.exports = { router };
