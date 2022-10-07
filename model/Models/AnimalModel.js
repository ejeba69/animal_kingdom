const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const AnimalClass = model('Animal', animalSchema);

module.exports = { AnimalClass };
