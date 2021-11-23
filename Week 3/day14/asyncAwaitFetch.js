//ES6 version
import fetch from 'node-fetch';


const nodeFetch = async () => {
    let urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
    let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
    let urlComments = 'https://jsonplaceholder.typicode.com/comments';
    let urlProducts = 'https://reqres.in/api/products';
    let data = {};

  try {

     //-------------//
    const AllData = await Promise.all([
        fetch(urlPhotos)
        .then(res => res.json())
        .then(res => res),
        fetch(urlTodos)
        .then(res => res.json())
        .then(res => res),
        fetch(urlComments)
        .then(res => res.json())
        .then(res => res),
        fetch(urlProducts)
        .then(res => res.json())
        .then(res => res),
    ]); 
    

    data = {
        photosTes   : AllData[0].filter(element => element.userId === 5),   
        todoTes     : AllData[1],
        commentTes  : AllData[2],
        productsTes : AllData[3],
    }

    console.log(data)
    } catch (error) {
    console.log(error)
  }
};

nodeFetch();
