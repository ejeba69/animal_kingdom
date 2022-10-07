const { mongoDBLive: mongoDBInit } = require('../db_settings/connection');
const { AnimalClass } = require('../Models/AnimalModel');

mongoDBInit();

const readAll = AnimalClass.find();

// console.log(readAll);

module.exports = { readAll };

/* 
// Read all the data
async function dataLogic() {
  await AnimalClass.find();
}

const readAll = dataLogic;
console.log(readAll);
*/
