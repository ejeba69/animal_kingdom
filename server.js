const express = require('express');
const { config } = require('dotenv');
const { router: animalRouter } = require('./controller/router/animalRouter');

config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', animalRouter);

app.listen(PORT, () => {
  console.log(
    `This Server is OBI-diently and YUSUF-fully listen for requests at http://127.0.0.1:${PORT}`
  );
});
