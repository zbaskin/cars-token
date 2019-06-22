const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


const PORT = 8080;
let email = '';
let body = {};

app.post('/mint-token', (req, res) => {
  const email = req.body.email;
  body = {
    authKey: 'O90HFGZ8LLIj',
    tokenData: {
      name: 'Cars'
    },
    toValue: email,
    requestType: 'email'
  };
  axios.post("http://54.153.62.161/mint-token/", body)
    .then(res => console.log("Response: " + res))
    .catch(err => console.log("Error: " + err));
});

app.listen(PORT, () => {
  console.log(`Cars app listening on port ${PORT}!`);
});
