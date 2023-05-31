const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('client'))

app.get('/', (req, res, next) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
})

app.get('/hello', (req, res, next) => {
  return res.status(200).json('Hello, express!');
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}...`)
});

module.exports = app;