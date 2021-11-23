//const fetch = require('node-fetch');
//ES6 version
import fetch from 'node-fetch';


const nodeFetch = async () => {
    let urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
    let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
    let urlComments = 'https://jsonplaceholder.typicode.com/comments';
    let urlProducts = 'https://reqres.in/api/products';
    //let data = {};

    //Promise Photos
    const photos = await fetch(urlPhotos)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
    //Promise Todos
    const todos = await fetch(urlTodos)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    //Promise Comments
    const comments = await fetch(urlComments)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
    //Promise Products
    const products = await fetch(urlProducts) 
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  
};

nodeFetch();
