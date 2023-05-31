const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('client'));

// endpoint to return a hello message
app.get('/hello', (req, res, next) => {
  return res.status(200).json('Hello, express!');
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}...`)
});

module.exports = app;