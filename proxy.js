const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'www')));

app.use('/', (req, res) => {
  const url = 'http://localhost:8100' + req.url; // Replace with your API URL
  axios({ method: req.method, url, data: req.body, headers: req.headers })
    .then(response => {
      res.status(response.status).send(response.data);
      console.log(response);
    })
    .catch(error => {
      res.status(error.response.status).send(error.response.data);
    });
});

const port = process.env.PORT || 8100;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});