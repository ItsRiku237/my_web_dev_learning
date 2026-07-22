const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
  res.send('Blog home page');
});


router.get('/about', (req, res) => {
  res.send('About Blog');
});

router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the blog post for ${req.params.slug}`);
});


module.exports = router

/*
| URL                                          | Output                         |
| -------------------------------------------- | ------------------------------ |
| `http://localhost:3000/blog`                 | Blog home page                 |
| `http://localhost:3000/blog/about`           | About Blog                     |
| `http://localhost:3000/blog/blogpost/nodejs` | Fetch the blog post for nodejs |
*/