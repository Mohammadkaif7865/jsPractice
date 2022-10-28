import fetch from 'node-fetch';
const url = 'https://amazoncloneserver.herokuapp.com/products';
// const axios = require('axios');
// axios.get(url)
//   .then(function (response) {
//     console.log(response);
//   });
fetch(url).then((res) => res.json()).then((data) => console.log(data));