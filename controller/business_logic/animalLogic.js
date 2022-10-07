const express = require('express');
const {
  readAll: entireCollection,
} = require('../../model/data_logic/animalData');

async function getAllLogic(req, res) {
  await entireCollection;
  res.send(entireCollection);
  console.log(entireCollection);
}

module.exports = { getAllLogic };

/* 
const getAllLogic = (req, res) => {
  res.send(
    'Peter Obi will win the next election. Because, Nigerian must become a great Nation.'
  );
  console.log(`Obidient is far better than sacrifice!!!`);
};
*/
