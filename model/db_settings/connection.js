const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

const DB_URI = process.env.DB_URI;

async function mongoDBLive() {
  // try {} catch () {}
  try {
    await mongoose.connect(DB_URI);
    console.log('MongoDB is a-live!');
  } catch (err) {
    console.log(err);
  }
}

module.exports = { mongoDBLive };
