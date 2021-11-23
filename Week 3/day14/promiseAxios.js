const axios = require('axios');
const { promises } = require('stream');

let urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
  let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
  let urlComments = 'https://jsonplaceholder.typicode.com/comments';
  let urlProducts = 'https://reqres.in/api/products';
let data = {};

axios
  .get(urlPhotos)
  .then((response) => {
    data = { photos: response.data.filter((item) => item.userId === 5) };

    return axios.get(urlTodos);
  })
  .then((response) => {
    data = { ...data, todos: response.data };

    return axios.get(urlComments);
  })
  .then((response) => {
    data = { ...data, comments: response.data };

    return axios.get(urlProducts);
  })
  .then((response) => {
    data = { ...data, products: response.data };

    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
