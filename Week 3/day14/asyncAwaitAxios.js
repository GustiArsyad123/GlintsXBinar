const axios = require('axios');

const fetchApi = async () => {
  let urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
  let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
  let urlComments = 'https://jsonplaceholder.typicode.com/comments';
  let urlProducts = 'https://reqres.in/api/products';
  let data = {};

  try {
    // const responsePhotos = await axios.get(urlPhotos); // Wait to finish
    // const responseTodos = await axios.get(urlTodos); // Wait to finish
    // const responseComments = await axios.get(urlComments); // Wait to finish
    //const responseProducts = await axios.get(urlProducts); // Wait to finish
    const response = await Promise.all([
      axios.get(urlPhotos),
      axios.get(urlTodos),
      axios.get(urlComments),
      axios.get(urlProducts),
    ]);

    // data = {
    //   photos: responsePhotos.data.filter((item) => item.userId === 5),
    //   todos: responseTodos.data,
    //   comments: responseComments.data,
    //   products: responseProducts.data,
    // };

    data = {
      photos: response[0].data.filter((item) => item.userId === 1),
      todos: response[1].data,
      comments: response[2].data,
      products: response[3].data,
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
