const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('server node/express');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
