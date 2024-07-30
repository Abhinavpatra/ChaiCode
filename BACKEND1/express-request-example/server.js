const express = require('express');
const axios = require('axios');
const axiosProxy = require('axios-proxy-fix');

const app = express();
const PORT = 3000;

const proxy = {
  host: 'your.proxy.host',
  port: 8080,
  auth: {
    username: 'yourUsername',
    password: 'yourPassword'
  }
};

const axiosInstance = axios.create({
  proxy: proxy
});

function sendRequest() {
  axiosInstance.get('y')
    .then(response => {
      console.log(`Status: ${response.status}`);
      console.log(`Data: ${response.data}`);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
}

setInterval(sendRequest, 500);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
