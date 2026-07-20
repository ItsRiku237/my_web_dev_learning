//link : https://expressjs.com/en/5x/starter/hello-world/

const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('public'))
//http://localhost:3000/Agenda.md -> u got that file when that inside public folder


// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello !');
});
// input in brouser http://localhost:3000/ output Hello !

app.get('/about', (req, res) => {
  res.send('about_us');
});
// input in brouser http://localhost:3000/about output about_us

app.get('/contact/contact_manager', (req, res) => {
  res.send('contact_me');
});
// input in brouser http://localhost:3000/contact/contact_manager output contact_me


//Multiple parameter
app.get('/blog/:slug/:second', (req , res) => {
  // logic to fetch {slug} from the db\
  // Multiple Queries:
    // For URL: http://localhost:3000/blog/Riku/tech?mode=dark&region=in
    console.log(req.params) // will output { slug: 'Blog Riku and tech' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }


  res.send(`Blog ${req.params.slug} and ${req.params.second}`);
})
// input in brouser http://localhost:3000/blog/Riku/tech output Blog Riku and tech

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



//npm i express
//npm i express@4  -> version 4
//npm i express@3  -> version 3