// 2. Router-level middleware
const express = require('express');
const router = express.Router();



// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
},
  (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
  }
);

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
  '/:id',
  (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route');
    // otherwise pass control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // render a regular page
    res.send('Regular Page');
  }
);

// handler for the /user/:id path, which renders a special page
router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  res.send('Special Page');
});

// mount the router on the app
// app.use('/', router);
module.exports = router