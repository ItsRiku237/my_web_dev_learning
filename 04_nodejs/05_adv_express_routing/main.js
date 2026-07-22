const express = require('express');
const blog = require('./routes/blog')

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use('/blog' , blog)


//Handling post & other requests
app.get('/', (req, res) => {
  console.log("Its a GET request.")
  res.send('It is a get request');
});

app.post('/', (req, res) => {
  console.log("Its a POST request.")
  res.send('Its a post request.');
});

//we can write this also no syntex error. (Chaining of requests)
app.put('/', (req, res) => {
  console.log("Its a PUT request.")
  res.send('Its a put request.');
}).delete('/', (req, res) => {
  console.log("Its a DELETE request.")
  res.send('Its a delete request.');
});


// Serving HTML files
app.get('/index', (req, res) => {
  console.log("Serving HTML files.")
  // res.sendFile('templetes/index.html'); //TypeError: path must be absolute or specify root to res.sendFile
  res.sendFile('templetes/index.html', { root: __dirname });
  // res.sendFile('D:/New folder/Web Devlopment/04_node/05_/templetes/index.html');
});

//Serving Json files
app.get('/api', (req, res) => {
  res.json({ a: 2, b: 3, c: 7, d: 9, name: ["Riku", "Harry"] });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



/*
| URL                                          | Output                         |
| -------------------------------------------- | ------------------------------ |
| `http://localhost:3000/`                     | It is a get request            |
| `http://localhost:3000/index`                | Serving HTML files.            |
| `http://localhost:3000/api`                  | Serving json.                  |
| `http://localhost:3000/blog`                 | Blog home page                 |
| `http://localhost:3000/blog/about`           | About Blog                     |
| `http://localhost:3000/blog/blogpost/nodejs` | Fetch the blog post for nodejs |
| 
*/